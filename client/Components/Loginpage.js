import Image from "next/image";
import bg from "../public/img/bg8.jpg";
import { useRouter } from "next/router";
import search from "../public/svgs/svg.js";
import styles from "../styles/Loginpage.module.css";
import GoogleloginComponent from "./GoogleloginComponent";
import { useDispatch } from "react-redux";

function Loginpage() {
  const history = useRouter();
  const dispatch = useDispatch();
  const signinResponse = (success, data) => {
    console.log(success, data);
    dispatch({
      type: "SIGNIN",
      payload: {
        name: data.name,
        email: data.email,
        imageUrl: data.imageUrl,
      },
    });
    history.push("/dashboard");
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.column1}>
          <div className={styles.mainnav}>
            <div style={{ marginLeft: "1%" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="white">
                    <path d="M79.5472,6.4528l-30.80827,10.03613l8.5944,31.52214l-24.36947,-15.0472l-9.30827,19.3584l-16.48893,7.88053v40.13053l33.67773,1.42774l0.69987,0.014l-22.91374,20.05827l18.63053,18.63053l7.89453,15.77507l30.80827,10.02214l12.19173,-35.83333l0.26595,-0.78385l0.44792,0.78385l17.20279,31.53613l18.63054,-18.63053h14.33333l22.21386,-22.21386l-32.09603,-23.54363l0.5599,-0.11198l31.53614,-6.45279l-10.75,-18.63054l7.16667,-15.0472l-20.78614,-31.53613l-24.91536,19.54036l4.12923,-31.00423h-21.5zM84.57226,64.5h2.85547c3.58333,0.71667 7.16946,1.43333 10.03613,3.58333l0.71387,0.71387c4.3,2.86667 6.46119,6.45 7.89453,10.75c0.71667,0 0.71387,0.72507 0.71387,1.44173c0.71667,1.43333 0.71386,3.57774 0.71386,5.01107v5.01107c-0.71667,0.71667 -0.71386,0.72507 -0.71386,1.44173c-2.15,4.3 -5.02507,8.6 -8.6084,10.75c0,0.71667 -0.71387,0.71386 -0.71387,0.71386c-2.86667,1.43333 -6.45279,2.86947 -10.03613,2.86947h-1.42774c-5.01667,0 -9.32226,-1.43054 -12.9056,-4.29721l1.07779,1.90365c-0.60383,-0.38228 -1.22382,-0.73551 -1.79167,-1.18977l-0.71386,-0.71387c-1.075,-1.075 -2.15,-2.33196 -3.13542,-3.76529c-0.98542,-1.43333 -1.88685,-3.05144 -2.60352,-4.8431c-0.71667,-0.71667 -0.71387,-0.71106 -0.71387,-1.42773c-0.71667,-2.15 -0.71387,-4.3028 -0.71387,-6.4528c0,-2.15 -0.0028,-3.57774 0.71387,-5.01107l-0.71387,0.62989v-2.07162c0,-0.71667 0.71387,-1.42493 0.71387,-2.1416c1.43333,-2.86667 3.58613,-6.4584 6.4528,-8.6084c0.71667,0 0.71107,-0.71387 1.42774,-0.71387c3.58333,-2.15 7.89453,-3.58333 11.47786,-3.58333z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.menu}>
              <div style={{ marginRight: "3rem" }}>
                <p>What</p>
              </div>
              <div style={{ marginRight: "3rem" }}>
                <p>About</p>
              </div>
              <div className={styles.searchicon}>{search("white", "25")}</div>
            </div>
          </div>
          <div className={styles.signindiv}>
            <h1>HeLLo HOw YoU Do.!?</h1>
            <GoogleloginComponent signinResponse={signinResponse} />
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
          <Image src={bg} alt="background pic" layout="responsive" />
        </div>
        <div className={styles.column3}>{search("black", "30")}</div>
      </div>
    </>
  );
}

export default Loginpage;
