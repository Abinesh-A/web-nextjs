import { useRouter } from "next/router";
import React from "react";
import Home from "../Components/Home";
import Image from "next/image";

export default function Dashboard() {
  const history = useRouter();
  if (!state.isAuthenticate) {
    history.push("/");
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Image alt="loading img" src="https://img.icons8.com/color/50/000000/iphone-spinner--v1.png" />
        <h1>Redirecting...</h1>
      </div>
    </div>
  );
}
