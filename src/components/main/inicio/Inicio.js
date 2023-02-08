import React from "react";
import "./inicio.css";
import card from "../../../img/card.png";
import supervivenciaPic from "../../../img/DSC08533.JPG"
import travesiaCard from "../../../img/travesiaCard.jpg"
import teamBuildingCard from "../../../img/teamBuildingCard.jpg"
import formacionCard from "../../../img/expediciones.jpg"
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="main">
      <div className="divImg">
        <h1 className="mainTitle">Mountain to People</h1>
      </div>
      <ul className="listContainer">
        <li className="liContainer">
          <Link to="/actividades/actividades">
            <img className="card" src={travesiaCard} alt="card" />
          </Link>
          <h4>Rutas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/supervivencia">
            <img className="card" src={supervivenciaPic} alt="card" />
          </Link>
          <h4>Experiencias de supervivencia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/actividades">
            <img className="card" src={card} alt="card" />
          </Link>
          <h4>Calendario</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>

        <li className="liContainer">
          <Link to="/actividades/actividades">
            <img className="card" src={teamBuildingCard} alt="card" />
          </Link>
          <h4>Team building</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>
        <li className="liContainer">
          <Link to="/actividades/actividades">
            <img className="card" src={formacionCard} alt="card" />
          </Link>
          <h4>Formación</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis vel vero quas.
          </p>
        </li>

      </ul>
    </div>
  );
}
