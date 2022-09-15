import React from "react";
import "./footer.css";
import logo from "../../img/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/mountaintopeople/">
        <img src={logo} alt="instagram" target="_blank" className="logoInsta" />
      </a>
    </div>
  );
}
