import React from "react";
import Img from "./images/image.png"
const Header=()=>{

    return <>
    <nav className="navbar bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={Img} alt="Bootstrap" width="30" height="24"/>
      <p>Google Keep Notes</p>
    </a>
  </div>
</nav>
    </>
}
export default Header;