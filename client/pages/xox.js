import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Nav from "../Components/Nav";
import JoinRoom from "../Components/JoinRoom";
import Xoxboard from "../Components/Xoxboard";
import { useDispatch, useSelector } from "react-redux";

function Xox() {
  // const [show, setShow] = useState(false);
  // const [roomcode, setRoomcode] = useState(null);
  const state = useSelector((state)=>state.xox);
  console.log("test",state)
  const dispatch = useDispatch();
  // const socket = io("http://localhost:8080")
  // const socket = io("http://localhost:3000")
  const socket = io()
  const connect = async () => {
    await fetch('/api/socket')
    socket.on("connect", () => {
      console.log(socket.id);
      socket.emit("joinRoom",state.roomcode)
    });
  };
  useEffect(() => {
    connect();
  }, []);
  const xoxresponse = (data) => {
    console.log("datasss",data);
    dispatch({
      type: "XOX",
      payload: {
        show: data.show,
        roomcode: data.roomcode
      },
    });
  };
  return (
    <>
      <Nav />
      <JoinRoom xoxresponse={xoxresponse}/>
      {state.show && (
       <Xoxboard socket={socket} roomcode={state.roomcode}/>
      )}
    </>
  );
}

export default Xox;
