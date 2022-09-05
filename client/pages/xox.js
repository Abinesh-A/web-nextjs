import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import JoinRoom from "../Components/JoinRoom";
import Xoxboard from "../Components/Xoxboard";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

function Xox() {
  const socket = io.connect("https://shielded-ocean-87926.herokuapp.com/")
  const state = useSelector((state)=>state.xox);
  const [code, setCode] = useState(null);

  useEffect(() => {
    socket.emit("joinRoom",code)
    console.log("joined",code)
  }, [code]);
  return (
    <>
      <Nav />
      <JoinRoom socket={socket} setCode={setCode}/>
      {state.show && (
       <Xoxboard socket={socket} roomcode={code}/>
      )}
    </>
  );
}

export default Xox;
