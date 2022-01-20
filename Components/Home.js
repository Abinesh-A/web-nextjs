import Image from "next/image";
import bg from "../public/img/bg5.jpg";
import styles from "../styles/Home.module.css";
import search from "../public/svgs/svg.js"
import GoogleloginComponent from "./GoogleloginComponent";
import { useDispatch} from "react-redux";
import { useRouter } from "next/router";
function Home() {
  const history=useRouter();
 const dispatch = useDispatch()
 const signinResponse=(success,data)=>{
   console.log(success,data);
   if(success){
     
    dispatch({type:"SIGNIN",payload:{name:data.name,email:data.email}})
    history.push('/dashboard')
   }
   
 }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.column1}>
          <div className="d-flex justify-content-between mt-3">
            <div style={{ marginLeft: "3%" }}>
            </div>
            <div className={styles.menu}>
              <div style={{ marginRight: "3rem" }}>
                <p>What</p>
              </div>
              <div style={{ marginRight: "3rem" }}>
                <p>About</p>
              </div>
              <div className={styles.searchicon}>
              {search()}
              
              </div>
            </div>
          </div>
          <div className={styles.signindiv}>
            <h1>HeLLo HOw u Do.!?</h1>
            <GoogleloginComponent signinResponse={signinResponse}/>
          </div>
          <div className={styles.dream}>
            <div className={styles.word1}>
              <span>D</span>
              <span>R</span>
            </div>
            <div className={styles.word2}>
              <span>E</span>
              <span>A</span>
            </div>
            <div className={styles.word3}>
              <span>M</span>
            </div>
          </div>
        </div>
        <div className={styles.bgimg}>
          <Image
            
            src={bg}
            alt="background pic"
          />
        </div>
        <div className={styles.column3}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
        </div>
      </div>
    </>
  );
}

export default Home;
