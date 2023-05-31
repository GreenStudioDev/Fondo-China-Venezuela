import React from "react";
import "../../styles";
import { Link } from "react-router-dom";
// import { ApiInstace } from "../../api";

export function Header() {
  // const companies = ApiInstace()
  // console.log("🚀 ~ file: Header.jsx:7 ~ Header ~ companies:", companies)

  return (
    <>
      <section className="title-page-header">
        <h1 className="title-page">FONDOS CONJUNTOS CHINA - VENEZUELA</h1>
        <img
          src="https://fundacionandresbello.org/bannerfad-02"
          alt="imagen banner"
        />
        <h2 className="text-subtitle">
          La Fundación Andrés Bello presenta esta base de datos interactiva en
          la que podrá encontrar información sobre las empresas, proyectos y
          personas que estuvieron relacionadas con los fondos conjuntos China -
          Venezuela en los periodos de 2007 - 2017. Esta información se
          encuentra organizada por sectores en los que podrá encontrar
          información detallada de los montos de inversión por proyecto y el
          estado en el que se encuentra. Esta herramienta brinda un contexto de
          los principales hechos que configuraron los fondos que ingresaron a
          Venezuela por parte del país asiático en dicho lapso.
        </h2>
      </section>
      <section className="containerfcv mt-64 mb-64 p-1">
        <a
          href="https://fundacionandresbello.org/informe-ejecutivo-seguimiento-fondos-china-venezuela/"
          target="blank"
          style={{
            display: "flex",
            flexDirection: "row",
            textDecoration: "none",
            alignItems: "center",
          }}
        >
          <img
            src=" https://fundacionandresbello.org/portada-informe-ejecutivo-seguimiento-fondos-china-venezuela-26350/"
            alt="portada informe ejecutivo"
            style={{ maxWidth: "250px", border: "1px solid #000" }}
          />
          <p
            style={{
              marginLeft: "18px",
              fontSize: "2rem",
              color: "#000",
              lineHeight: "45px",
            }}
          >
            Haz clic acá para acceder al informe ejecutivo del equipo de
            investigación de la Fundación Andrés Bello “Seguimiento de los
            fondos conjuntos Chino Venezolanos”
          </p>
        </a>
      </section>
      <section className="containerfcv mt-64 mb-140 p-1">
        <div className="box-header">
          <p>
            Con esta línea de tiempo, podrás entender mejor cuál fue el contexto
            lineal de los principales hechos que configuraron los fondos que
            ingresaron a Venezuela del país asiático.
          </p>
          <Link
            className="box-header-link font-m-p"
            to="/fondos-china-venezuela/linea-tiempo"
          >
            <h3 style={{fontSize: "1.17rem"}}>linea de tiempo - click aquí</h3>
          </Link>
        </div>
        <div>
          <img
            alt="imagen-portada"
            className="image-pages"
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          />
        </div>
      </section>
    </>
  );
}
