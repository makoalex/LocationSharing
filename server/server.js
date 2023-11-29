"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var socket_io_1 = require("socket.io");
var node_http_1 = require("node:http");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
var server = (0, node_http_1.createServer)(app);
var PORT = process.env.PORT || 3003;
// using the server object with the constructor of socket.io and config object
var io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    },
});
io.on("connection", function (socket) {
    console.log("user connected: ".concat(socket.id));
    socket.on('disconnect', function () {
        disconnectEventHandler(socket.id);
    });
});
app.get("/", function (req, res) {
    res.send("server is running");
});
var disconnectEventHandler = function (id) {
    console.log("user disconnected: ".concat(id));
};
server.listen(PORT, function () {
    console.log("server is running on port ".concat(PORT));
});
