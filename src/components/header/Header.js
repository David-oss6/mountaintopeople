import React, { useEffect, useState, useLayoutEffect } from "react";
import "./header.css";
import imgLogo from "../../img/logo2.png";
import flecha from "../../img/arrow.png";
import hamburguer from "../../img/hamburguer.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [size, setSize] = useState("");
  const [modal, setModal] = useState(false);
  const [actividadesModal, setActividadesModal] = useState(false);
  const [inicioModal, setInicioModal] = useState(false);
  const [rutasModal, setRutasModal] = useState(false);
  useLayoutEffect(() => {
    window.addEventListener("resize", function () {
      setSize(window.innerWidth);
    });
  });
  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  useEffect(() => {
    setInicioModal(false);
  }, [actividadesModal]);
  useEffect(() => {
    setActividadesModal(false);
    setRutasModal(false);
  }, [inicioModal]);
  const modalsOff = () => {
    setActividadesModal(false);
    setInicioModal(false);
    setRutasModal(false);
  };

  return (
    <nav onMouseLeave={() => modalsOff()} className="header">
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
              onMouseOver={() => setInicioModal(true)}
              className="links"
              to="/"
            >
              INICIO
              <img className="flecha" src={flecha} />
            </Link>
            <ul className={inicioModal ? "inicioModal" : "hide"}>
              <li>
                <Link className="links" to="/actividades/cimas">
                  QUIEN SOY
                </Link>
              </li>
              <li>
                <Link
                  onMouseOver={() => setActividadesModal(false)}
                  className="links"
                  to="/contacto"
                >
                  CONTACTO
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul onMouseOver={() => setActividadesModal(true)}>
              ACTIVIDADES
              <img className="flecha" src={flecha} />
            </ul>
            <ul className={actividadesModal ? "actividadesModal" : "hide"}>
              <li>
                <Link
                  onMouseOver={() => setRutasModal(true)}
                  className="links"
                  to="/rutas"
                >
                  <img className="flechaRutas" src={flecha} />
                  RUTAS

                </Link>
                <ul className={rutasModal ? "rutasModal" : "hide"}>
                  <li>
                    <Link className="links" to="/actividades/cimas">
                      CIMAS
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/actividades/travesias">
                      TRAVESIAS
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/actividades/excursiones">
                      EXCURSIONES
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/actividades/raquetas">
                      RAQUETAS
                    </Link>
                  </li>
                </ul>
                <li
                  onMouseOver={() => setRutasModal(false)}
                >EXPERIENCIAS DE SUPERVIVENCIA</li>
                <li>CALENDARIO</li>
                <li>TEAM BUILDING</li>
                <li>FORMACION</li>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <>
          <img
            className="hamburguer"
            src={hamburguer}
            onClick={() => setModal(!modal)}
          />
          <ul
            onMouseLeave={() => setModal(false)}
            className={modal ? "linksModal" : "hide"}
          >
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
                <img className="flecha" src={flecha} />
              </Link>
              <ul className="actividadesListInModal">
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
