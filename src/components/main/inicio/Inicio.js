import React from "react";
import "./inicio.css";
import careto from "../../../img/careto.jpg";
import montaña from "../../../img/08f80931-cc38-4d9c-90b6-0927885f859f.jpg";

export default function Inicio() {
  return (
    <div className="main">
      <img className="careto" src={careto} alt="careto" width="140px" />
      <p className="texto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        asperiores dignissimos ipsum explicabo ullam nam, odit cumque sapiente
        aspernatur numquam dolorem perspiciatis natus corrupti placeat expedita.
        Eius, accusantium saepe. Mollitia!
      </p>
      <p className="texto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, ratione.
        Consequatur voluptas repellat provident cupiditate recusandae aliquam
        distinctio et quae. Nobis, recusandae modi necessitatibus fuga
        repellendus quisquam exercitationem itaque consequatur.
      </p>
      <img src={montaña} alt="paisaje" width="100%" />
    </div>
  );
}
