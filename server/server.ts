import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { dataProps, onlineUsersProps } from "../front/src/Types";



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
  socket.on("user-login", (data: any) => {
    loginEventHandler(socket, data);
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
const disconnectEventHandler = (id: string) => {
  console.log(`user disconnected: ${id}`);
  removeOnlineUsers(id);
};
const loginEventHandler = (socket, data: dataProps) => {
  onlineUsers[socket.id] = {
    username: data.username,
    coords: data.coords,
  };
  console.log(onlineUsers);
};

const removeOnlineUsers = (id: string) => {
  if (onlineUsers[id]) {
    delete onlineUsers[id];
  }
  console.log(onlineUsers);
};
