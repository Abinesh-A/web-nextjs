import React from 'react'
import {useRouter} from 'next/router'
function dashboard() {
    const history=useRouter();
   const signout=()=>{
       history.push('/');
   }
    return (
        <div>
            <h1>HEllo Signed in successfully</h1>
            <button onClick={signout}>Signout</button>
        </div>
    )
}

export default dashboard
