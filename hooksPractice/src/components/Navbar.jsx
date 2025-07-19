import React from "react";
import { memo } from "react";

const Navbar = ({adjective})=>{
    console.log("NavBar is rendered")
    return (
        <div>
            Iam a {adjective} NavBar
        </div>
    )
}

export default memo (Navbar)