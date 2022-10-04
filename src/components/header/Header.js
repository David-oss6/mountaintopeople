import React, { useEffect, useState, useLayoutEffect } from "react";
import "./header.css";
import imgLogo from "../../img/logo2.png";
import flecha from "../../img/arrow.png";
import hamburguer from "../../img/hamburguer.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [size, setSize] = useState(0);
  const [modal, setModal] = useState(false);
  const [actividadesModal, setActividadesModal] = useState(false);
  useLayoutEffect(() => {
    window.addEventListener("resize", function () {
      setSize(window.innerWidth);
    });
  });

  return (
    <nav onMouseLeave={() => setActividadesModal(false)} className="header">
      <Link to="/">
        <img
          className="logoHeader links"
          src={imgLogo}
          alt="mountaintopeaople"
          width="100px"
        />
      </Link>
      {size > 730 ? (
        <ul className="menu">
          <li>
            <Link
              onMouseOver={() => setActividadesModal(false)}
              className="links"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onMouseOver={() => setActividadesModal(true)}
              className="links"
              to="/actividades"
            >
              Actividades
              <img className="flecha" src={flecha} />
            </Link>
            <ul className={actividadesModal ? "actividadesModal" : "hide"}>
              <li>
                <Link className="links" to="/actividades/supervivencia">
                  Supervivencia
                </Link>
              </li>
              <li>
                <Link className="links" to="/actividades/barranquismo">
                  Barranquismo
                </Link>
              </li>
              <li>
                <Link className="links" to="/actividades/travesia">
                  Travesía
                </Link>
              </li>
              <li>
                <Link className="links" to="/actividades/fotografia">
                  Fotografía
                </Link>
              </li>
              <li>
                <Link className="links" to="/actividades/viaferrata">
                  Vía Ferrata
                </Link>
              </li>
              <li>
                <Link className="links" to="/actividades/raquetas">
                  Raquetas
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              onMouseOver={() => setActividadesModal(false)}
              className="links"
              to="/contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <img
            className="hamburguer"
            src={hamburguer}
            onClick={() => setModal(!modal)}
          />
          <ul className={modal ? "linksModal" : "hide"}>
            <li>
              <Link className="links" onClick={() => setModal(false)} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="links"
                onClick={() => setModal(false)}
                to="/actividades"
              >
                Actividades
              </Link>
            </li>
            <li>
              <Link
                className="links"
                onClick={() => setModal(false)}
                to="/contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}
