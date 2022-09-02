const app = require("express")();
const port = 8080;
const http = require("http").Server(app);
const io = require("socket.io")(http,{
    cors:{
        origin:["http://localhost:3000"]
    }
});

io.on("connection", (socket) => {
  console.log("1 user connected",socket.id);

  socket.on("joinRoom",(roomcode)=>{
    console.log(`A user joined the room ${roomcode}`)
    socket.join(roomcode)
  })

  socket.on("play",({id,roomcode})=>{
    console.log(`play at ${id} to ${roomcode}`);
    socket.broadcast.to(roomcode).emit("updategame",id)
  })

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});
// app.get("/", (req, res) => {
//   res.send("Server running");
// });

http.listen(process.env.PORT || 3000, () => {
  console.log("server running...");
});