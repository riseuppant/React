import React from "react";

const Navbar = ({adjective})=>{
    console.log("NavBar is rendered")
    return (
        <div>
            Iam a {adjective} NavBar
        </div>
    )
}

export default Navbar