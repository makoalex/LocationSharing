"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const peer_1 = require("peer");
const socket_io_1 = require("socket.io");
const node_http_1 = require("node:http");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// peer server
const peerServer = (0, peer_1.PeerServer)({ port: 9000, path: "/peer" });
const server = (0, node_http_1.createServer)(app);
const PORT = process.env.PORT || 3003;
let onlineUsers = {};
let videoRooms = {};
// using the server object with the constructor of socket.io and config object
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log(`user connected of id: ${socket.id}`);
    socket.on("user-login", (data) => {
        loginEventHandler(socket, data);
    });
    socket.on("chat-message", (data) => {
        chatMessageHandler(socket, data);
    });
    socket.on("video-room-create", (data) => {
        videoRoomCreateHandler(socket, data);
    });
    socket.on("video-room-join", (data) => {
        videoRoomJoinHandler(socket, data);
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
const loginEventHandler = (socket, data) => {
    socket.join("logged-users");
    onlineUsers[socket.id] = {
        username: data.username,
        coords: data.coords,
    };
    console.log(onlineUsers);
    io.to("logged-users").emit("online-users", convertOnlineUsersToArray());
    // broadcasting video rooms to all users that are logged in
    broadcastVideoRooms();
};
const chatMessageHandler = (socket, data) => {
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
const videoRoomCreateHandler = (socket, data) => {
    const { peerId, newRoomId } = data;
    // adding new room
    videoRooms[newRoomId] = {
        participants: [
            {
                socketId: socket.id,
                username: onlineUsers[socket.id].username,
                peerId,
            },
        ],
    };
    broadcastVideoRooms();
    console.log("new room created", data);
};
const videoRoomJoinHandler = (socket, data) => {
    const { roomId, peerId } = data;
    if (videoRooms[roomId]) {
        videoRooms[roomId].participants.forEach((participant) => {
            socket.to(participant.socketId).emit("video-room-init", {
                newParticipantPeerId: peerId,
            });
        });
        // videoRooms[roomId].participants.push({
        //   socketId:socket.id,
        //   username:onlineUsers[socket.id].username,
        //   peerId
        // })
        videoRooms[roomId].participants = [
            ...videoRooms[roomId].participants,
            {
                socketId: socket.id,
                username: onlineUsers[socket.id].username,
                peerId,
            },
        ];
        broadcastVideoRooms();
    }
};
const disconnectEventHandler = (id) => {
    2;
    console.log(`user disconnected: ${id}`);
    removeOnlineUsers(id);
    broadcastDisconnectUsersDetail(id);
};
//  helper functions
const broadcastDisconnectUsersDetail = (disconnectedUserSocketId) => {
    io.to("logged-users").emit("user-disconnected", disconnectedUserSocketId);
};
const broadcastVideoRooms = () => {
    // broadcasting to users that have passed the login event
    io.to('logged-users').emit("video-rooms", videoRooms);
    console.log("videoRooms", videoRooms);
};
const removeOnlineUsers = (id) => {
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
//# sourceMappingURL=server.js.map