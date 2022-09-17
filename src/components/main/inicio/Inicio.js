import React from "react";
import "./inicio.css";
import card from "../../../img/card.png";

export default function Inicio() {
  return (
    <div className="main">
      <div className="divImg">
        <h1 className="mainTitle">Mountain to People</h1>
      </div>
      <ul className="listContainer">
        <li className="liContainer">
          <img className="card" src={card} alt="card" />
          <h4>Supervivencia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <img className="card" src={card} alt="card" />
          <h4>Barranquismo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <img className="card" src={card} alt="card" />
          <h4>Travesía</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <img className="card" src={card} alt="card" />
          <h4>Fotografía</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <img className="card" src={card} alt="card" />
          <h4>Vía Ferrata</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <img className="card" src={card} alt="card" />
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
