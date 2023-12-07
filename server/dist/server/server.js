"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const node_http_1 = require("node:http");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = (0, node_http_1.createServer)(app);
const PORT = process.env.PORT || 3003;
let onlineUsers = {};
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
const disconnectEventHandler = (id) => {
    console.log(`user disconnected: ${id}`);
    removeOnlineUsers(id);
};
const loginEventHandler = (socket, data) => {
    socket.join("logged-users");
    onlineUsers[socket.id] = {
        username: data.username,
        coords: data.coords,
    };
    console.log(onlineUsers);
    io.to("logged-users").emit("online-users", convertOnlineUsersToArray());
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