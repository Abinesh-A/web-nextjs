import React, { useEffect } from "react";
import { io } from "socket.io-client";
import Nav from "../Components/Nav";
import JoinRoom from "../Components/JoinRoom";
import Xoxboard from "../Components/Xoxboard";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

function Xox() {
  // const [show, setShow] = useState(false);
  // const [roomcode, setRoomcode] = useState(null);
  const state = useSelector((state) => state.xox);
  console.log("test", state);
  const dispatch = useDispatch();
  const socket = io("https://web-nextjs-server.vercel.app/");
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
      socket.emit("joinRoom", state.roomcode);
    });
  }, []);
  const xoxresponse = (data) => {
    console.log("datasss", data);
    dispatch({
      type: "XOX",
      payload: {
        show: data.show,
        roomcode: data.roomcode,
      },
    });
  };
  const history = useRouter();
  if (state.isAuthenticate) {
    history.push("/");
  } else {
    return (
      <>
        <Nav />
        <JoinRoom xoxresponse={xoxresponse} />
        {state.show && <Xoxboard socket={socket} roomcode={state.roomcode} />}
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
