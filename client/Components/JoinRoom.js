import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Xox.module.css";

function JoinRoom({socket, setCode}) {
  const [codes, setCodes] = useState(null);
  const state = useSelector((state) => state.xox);
  const handlesubmit = () => {
    setCode(codes)
    dispatch({
      type: "XOX",
      payload: {
        show: true,
        roomcode: codes
      },
    });
  };
  return (
    <>
      {!state.show && (
        <div className={styles.roomdiv}>
          <div className={styles.rtext}>
            <h1>Enter a room code</h1>
            <h1>To create or join</h1>
          </div>
          <input
            type="number"
            placeholder="eg: 1212"
            onChange={(e) => setCodes(e.target.value)}
          />
          <button onClick={handlesubmit}>Save</button>
        </div>
      )}
    </>
  );
}

export default JoinRoom;
