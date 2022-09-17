import React, { useEffect, useState } from "react";
import "./header.css";
import imgLogo from "../../img/logo2.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [x, setX] = useState(0);
  useEffect(() => {
    let x = window.innerWidth;
    console.log(x);
    setX(x);
  }, []);

  return (
    <div className="header">
      <img
        className="logoHeader"
        src={imgLogo}
        alt="mountaintopeaople"
        width="100px"
      />
      {x > 700 ? (
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/actividades">Actividades</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      ) : (
        <p>====</p>
      )}
    </div>
  );
}
