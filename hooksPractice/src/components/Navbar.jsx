import React from "react";
import { memo } from "react";

const Navbar = ({adjective,getAdjective})=>{
    console.log("NavBar is rendered")
    return (
        <div >
            Iam a {adjective} NavBar
            <button 
            onClick={()=>getAdjective()}
            >{getAdjective()}</button>
        </div>
    )
}

export default memo (Navbar)