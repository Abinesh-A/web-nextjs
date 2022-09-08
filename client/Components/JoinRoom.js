import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Xox.module.css";

function JoinRoom({ setCode }) {
  const [codes, setCodes] = useState(null);
  const router=useRouter()
  const state = useSelector((state) => state.xox);
  const dispatch = useDispatch();
  const handlesubmit = () => {
    setCode(codes);
    dispatch({
      type: "XOX",
      payload: {
        show: true,
        roomcode: codes,
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
            className={styles.roomint}
            onChange={(e) => setCodes(e.target.value)}
          />
          <div>
            <button className={styles.playbtn + " " + styles.playbtndiv} onClick={()=>router.push('/')}>BACK</button>
            <button className={styles.backbtn + " " + styles.playbtndiv} onClick={handlesubmit}>PLAY</button>
          </div>
        </div>
      )}
    </>
  );
}

export default JoinRoom;
