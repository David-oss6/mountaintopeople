import React from "react";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import Actividades from "../main/actividades/Actividades";
import Inicio from "./inicio/Inicio";
import Contacto from "../contacto/Contacto";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/mountaintopeople" element={<Inicio />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}
