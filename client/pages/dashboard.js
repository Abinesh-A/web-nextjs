import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Home from "../Components/Home";

export default function Dashboard() {
  const state = useSelector((state) => state);
  const history = useRouter();
  if (!state.isAuthenticate) {
    history.push("/");
  } else {
    return (
      <>
        <Home state={state} />
      </>
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
