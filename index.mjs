import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Running");
});
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);
  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });
  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });
  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
