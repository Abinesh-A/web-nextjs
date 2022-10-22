import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../styles/Xox.module.css";

function Xoxboard({ socket, roomcode }) {
    const[board,setBoard]=useState(["","","","","","","","",""])
    // const[canplay,setCanplay]=useState(true)
    const xoxcontrol = useSelector((state) => state.xoxcontrol);
    console.log(xoxcontrol.board)
    const dispatch = useDispatch();
    useEffect(()=>{
        socket.on("updategame",(id)=>{
          console.log(id)
          dispatch({
            type: "SETBOARD",
            payload: {
              board: {...xoxcontrol.board,[id]:"O"},
              canplay: true,
            },
          });
          setBoard((data)=>({...data,[id]:"O"}))
          // setCanplay(true)
        })
        return () => socket.off("updategame");
      },[])
      const handleCellClick=(e)=>{
        const id=e.currentTarget.id
        if(xoxcontrol.canplay && xoxcontrol.board[id]===""){
          dispatch({
            type: "SETBOARD",
            payload: {
              board: {...xoxcontrol.board,[id]:"X"},
              canplay: false,
            },
          });
          setBoard((data)=>({...data,[id]:"X"}))
          socket.emit("play",{id,roomcode})
          // setCanplay(false)
        }
        // if (
        //   (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
        //   (board[0] === "O" && board[1] === "O" && board[2] === "O")
        // ) {
        //   setBoard(["", "", "", "", "", "", "", "", ""]);
        // }
      }
    return (
        <>
        <div className={styles.xox}>
          <div className={styles.xox1}>
            <div className={styles.board}>
              <div>
                <div className="d-flex">
                  <div onClick={handleCellClick} id="0" className={styles.boxL + " " + styles.boxT}>
                    <h1>{xoxcontrol.board[0]}</h1>
                  </div>
                  <div onClick={handleCellClick} id="1" className={styles.boxT}>
                    <h1>{xoxcontrol.board[1]}</h1>
                  </div>
                  <div onClick={handleCellClick} id="2" className={styles.boxR + " " + styles.boxT}>
                    <h1>{xoxcontrol.board[2]}</h1>
                  </div>
                </div>
                <div className="d-flex">
                  <div onClick={handleCellClick} id="3" className={styles.boxL}>
                    <h1>{xoxcontrol.board[3]}</h1>
                  </div>
                  <div onClick={handleCellClick} id="4" className={styles.boxT}>
                    <h1>{xoxcontrol.board[4]}</h1>
                  </div>
                  <div onClick={handleCellClick} id="5" className={styles.boxR}>
                    <h1>{xoxcontrol.board[5]}</h1>
                  </div>
                </div>
                <div className="d-flex">
                  <div onClick={handleCellClick} id="6" className={`${styles.boxL} ${styles.boxB}`}>
                    <h1>{xoxcontrol.board[6]}</h1>
                  </div>
                  <div onClick={handleCellClick} id="7" className={styles.boxT + " " + styles.boxB}>
                    <h1>{xoxcontrol.board[7]}</h1>
                  </div>
                  <div onClick={handleCellClick} id="8" className={styles.boxR + " " + styles.boxB}>
                    <h1>{xoxcontrol.board[8]}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dream}>
              <div className={styles.word1}>
                <span>O</span>
                <span>X</span>
              </div>
              <div className={styles.word2}>
                <span>X</span>
                <span>O</span>
              </div>
              <div className={styles.word3}>
                <span>X</span>
              </div>
            </div>
          </div>
          {/* <div className={styles.xox2}>
            <img src="https://img.icons8.com/stickers/100/000000/spinner-frame-1.png" />
          </div>
          <div className={styles.xox3}>
            <h3>SCORE</h3>
          </div> */}
        </div>
        </>
    );
}

export default Xoxboard;