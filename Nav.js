import React, { useEffect, useState } from "react";
import App from "./App";
import "./Nav.css";

import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);
  const blurContent = () => {
    console.log("i am executed");

    document.getElementById("appp").className = "myBlur";
    console.log("blur is true");

    console.log("");
  };
  return (
    //  let a = true;
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        className="nav_logo"
        alt="netflix logo"
      />
      <img
        className="nav_avatar"
        alt="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
      />
      <div>
        <Link to="/Login">
          <span className="Sign_in">Sign In</span>
        </Link>
        <button onClick={() => blurContent()} className="BLUR">
          BLUR
        </button>
      </div>
    </div>
  );
}

export default Nav;
