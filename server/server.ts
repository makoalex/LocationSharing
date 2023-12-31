import express from "express";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { createServer } from "node:http";
import { dataProps, onlineUsersProps, IMessage } from "../front/src/Types";

const app = express();
app.use(cors());
const server = createServer(app);
const PORT = process.env.PORT || 3003;
let onlineUsers: onlineUsersProps = {};

// using the server object with the constructor of socket.io and config object
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected of id: ${socket.id}`);
  socket.on("user-login", (data: dataProps) => {
    loginEventHandler(socket, data);
  });

  socket.on("chat-message", (data: IMessage) => {
    chatMessageHandler(socket, data);
  });

  socket.on("disconnect", () => {
    disconnectEventHandler(socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("server is running");
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//handlers

//  sending message handler
const chatMessageHandler = (socket: Socket, data: IMessage) => {
  const { receiverSocketId, content, id } = data;
  console.log(" this is data in chatMessageHandler", data);
  if (onlineUsers[receiverSocketId]) {
    socket.to(receiverSocketId).emit("chat-message", {
      senderSocketId: socket.id,
      content,
      id,
    });
  }
};

const disconnectEventHandler = (id: string) => {
  console.log(`user disconnected: ${id}`);
  removeOnlineUsers(id);
  broadcastDisconnectUsersDetail(id);
};


const loginEventHandler = (socket: Socket, data: dataProps) => {
  socket.join("logged-users");
  onlineUsers[socket.id] = {
    username: data.username,
    coords: data.coords,
  };
  console.log(onlineUsers);
  io.to("logged-users").emit("online-users", convertOnlineUsersToArray());
};

const broadcastDisconnectUsersDetail = (disconnectedUserSocketId: string) => {
  io.to("logged-users").emit("user-disconnected", disconnectedUserSocketId);
};

const removeOnlineUsers = (id: string) => {
  if (onlineUsers[id]) {
    delete onlineUsers[id];
  }
  console.log(onlineUsers);
};

const convertOnlineUsersToArray = () => {
  const onlineUsersArray = [];
  Object.entries(onlineUsers).forEach(([key, value]) => {
    onlineUsersArray.push({
      socketId: key,
      username: value.username,
      coords: value.coords,
    });
  });
  return onlineUsersArray;
};
