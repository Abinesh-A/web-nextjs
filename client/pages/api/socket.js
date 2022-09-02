// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
// import { Server } from 'Socket.IO'

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io
//     io.on("connection", (socket) => {
//       console.log("1 user connected",socket.id);
    
//       socket.on("joinRoom",(roomcode)=>{
//         console.log(`A user joined the room ${roomcode}`)
//         socket.join(roomcode)
//       })
    
//       socket.on("play",({id,roomcode})=>{
//         console.log(`play at ${id} to ${roomcode}`);
//         socket.broadcast.to(roomcode).emit("updategame",id)
//       })
    
//       socket.on("disconnect", () => {
//         console.log("User Disconnected");
//       });
//     });
//   }
//   res.end()
// }

// export default SocketHandler