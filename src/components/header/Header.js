import React from "react";
import "./header.css";
import imgLogo from "../../img/logo2.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Actividades from "../main/actividades/Actividades";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logoHeader"
        src={imgLogo}
        alt="mountaintopeaople"
        width="100px"
      />
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
    </div>
  );
}
