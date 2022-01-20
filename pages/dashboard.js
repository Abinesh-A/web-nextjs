import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function dashboard() {
  const state=useSelector(state=>state)
  const dispatch=useDispatch();
  const history=useRouter()
  if(!state.isAuthenticate){
    history.push('/')
  }
  else{
  return (
    
    <div>
      <h1>HEllo Signed in successfully your name : {state.data.name} email: {state.data.email}</h1>
      <button onClick={()=>dispatch({type:"SIGNOUT"})}>Sign out</button>
    </div>
  );
  }
  return (
    <h1>Redirecting...</h1>
  )
}
