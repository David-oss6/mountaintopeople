import React from "react";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import Actividades from "../main/actividades/Actividades";
import Inicio from "./inicio/Inicio";
import Contacto from "../contacto/Contacto";
import Supervivencia from "./actividades/supervivencia/Supervivencia";
import Viaferrata from "./actividades/viaferrata/Viaferrata";
import Travesia from "./actividades/travesia/Travesia";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/mountaintopeople" element={<Inicio />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades />} />

        {/* RUTAS ACTIVIDADES INICIO ************** */}
        <Route path="/actividades/rutas" element={<Actividades />} />
        <Route path="/actividades/cimas" element={<Actividades />} />
        <Route
          path="/actividades/travesia"
          element={<Travesia travesia={"travesia"} />}
        />
        <Route path="/actividades/excursiones" element={<Actividades />} />

        <Route path="/actividades/raquetas" element={<Actividades />} />
        {/* RUTAS ACTIVIDADES FIN ************** */}

        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}
