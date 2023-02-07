import React from "react";
import "./travesia.css";
import { listaActividades } from "../../../../listaActividades/listaActividades";

export default function Travesia({ travesia }) {
  return (
    <div className="travesiaContainer">
      <div className="travesiaTitulo">
        <h2>Travesía</h2>
        {/* INICIO migrando componentes a lista + .map()
        importacion de listaactiviades[]
        desde un unico componente imprimo informacion pertinente
        */}
        {listaActividades ? (
          listaActividades.map((act) => {
            return (
              <div>
                <h2>{act.nombre}</h2>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
        {/* FIN migrando componentes
         */}
      </div>
    </div>
  );
}
