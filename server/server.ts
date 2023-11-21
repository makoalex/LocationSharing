import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
// using the server object with the constructor of socket.io and config object
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);
  socket.on('disconnect', ()=>{
    disconnectEventHandler(socket.id)
  })
});


app.get("/", (req, res) => {
  res.send("server is running");
});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
 const disconnectEventHandler = (id:string)=>{
    console.log(`user disconnected: ${id}`)
 }