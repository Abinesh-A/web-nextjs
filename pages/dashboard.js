import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useRouter();
  if (!state.isAuthenticate) {
    history.push("/");
  } else {
    return (
      <div>
        <h1>HEllo Signed in successfully</h1>
        <h1>Name: {state.data.name}</h1>
        <h1>Email: {state.data.email}</h1>
        <img src="https://lh3.googleusercontent.com/a-/AOh14GiojISlq431q529vmKadHwFxoY8aTZvSa6JkEtNuQ=s96-c"></img>
        <button onClick={() => dispatch({ type: "SIGNOUT" })}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div>
        <img src="https://img.icons8.com/color/50/000000/iphone-spinner--v1.png" />
        <h1>Redirecting...</h1>
      </div>
    </div>
  );
}
