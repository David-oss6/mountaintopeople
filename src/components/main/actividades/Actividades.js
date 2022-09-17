import React from "react";
import "./actividades.css";
import imagen from "../../../img/under_construction.png";

export default function Actividades() {
  return (
    <div className="container">
      <img className="construction_img" src={imagen} alt="contruction" />
    </div>
  );
}
