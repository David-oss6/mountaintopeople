import React from "react";
import "./footer.css";
import logo from "../../img/instagram.png";
import logo2 from "../../img/facebook.png";
import logo3 from "../../img/youtube.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/mountaintopeople/">
        <img src={logo} alt="instagram" target="_blank" className="logoInsta" />
      </a>
      <a href="#">
        <img
          src={logo2}
          alt="facebook"
          target="_blank"
          className="logofacebook"
        />
      </a>
      <a href="#">
        <img
          src={logo3}
          alt="youtube"
          target="_blank"
          className="logoyoutube"
        />
      </a>
    </div>
  );
}
