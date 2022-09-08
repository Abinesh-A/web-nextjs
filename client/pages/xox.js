import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "../Components/Nav";
import JoinRoom from "../Components/JoinRoom";
import Xoxboard from "../Components/Xoxboard";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useRouter } from "next/router";

function Xox() {
  const socket = io.connect("https://shielded-ocean-87926.herokuapp.com/");
  const state = useSelector((state) => state);
  const [code, setCode] = useState(null);

  useEffect(() => {
    socket.emit("joinRoom", state.xox.roomcode);
  }, [code]);
  const history = useRouter();
  if (state.isAuthenticate) {
    history.push("/");
  } else {
    return (
      <>
        <Nav />
        <JoinRoom setCode={setCode} />
        {state.xox.show && <Xoxboard socket={socket} roomcode={code} />}
      </>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Image
          alt="loading img"
          src="https://img.icons8.com/color/50/000000/iphone-spinner--v1.png"
        />
        <h1>Redirecting...</h1>
      </div>
    </div>
  );
}

export default Xox;
