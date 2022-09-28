import React from "react";
import "./inicio.css";
import card from "../../../img/card.png";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="main">
      <div className="divImg">
        <h1 className="mainTitle">Mountain to People</h1>
      </div>
      <ul className="listContainer">
        <li className="liContainer">
          <Link to="/actividades/supervivencia">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Supervivencia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/barranquismo">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Barranquismo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/travesia">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Travesía</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/fotografia">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Fotografía</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/viaferrata">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Vía Ferrata</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/raquetas">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Raquetas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
      </ul>
    </div>
  );
}
