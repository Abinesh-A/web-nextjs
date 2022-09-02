import React, { useState } from "react";
import { useSelector } from "react-redux";

function JoinRoom(props) {
  const [code, setCode] = useState(null);
  const state = useSelector((state) => state.xox);
  const handlesubmit = () => {
    props.xoxresponse({
      show: true,
      roomcode: code
    })
  }
  // const handlesubmit = () => {
  //   setShow(true);
  //   setRoomcode(code);
  // };
  return (
    <>
      {!state.show && (
        <div>
          <h1>Enter a room code</h1>
          <input
            type="number"
            placeholder="eg: 1212"
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handlesubmit}>Save</button>
        </div>
      )}
    </>
  );
}

export default JoinRoom;
