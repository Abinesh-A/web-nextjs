import { useState } from "react";
import Home from "../Components/Home";

export default function Index() {
  const [isAunthenticate,setIsAunthenticate]=useState(false);
  return (
    <>
    <Home isAunthenticate={isAunthenticate} setIsAunthenticate={setIsAunthenticate}/>
     
    </>
  );
}
