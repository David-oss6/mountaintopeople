import React, { useEffect, useState } from "react";
import "./header.css";
import imgLogo from "../../img/logo2.png";
import hamburguer from "../../img/hamburguer.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [x, setX] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    let x = window.innerWidth;
    console.log(x);
    setX(x);
  }, []);

  return (
    <nav className="header">
      <img
        className="logoHeader"
        src={imgLogo}
        alt="mountaintopeaople"
        width="100px"
      />
      {x > 700 ? (
        <ul className="menu">
          <li>
            <Link className="links" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="links" to="/actividades">
              Actividades
            </Link>
          </li>
          <li>
            <Link className="links" to="/contacto">
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
