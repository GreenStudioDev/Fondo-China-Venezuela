import React from "react";
import "../../styles"
import { Link } from "react-router-dom";
// import { ApiInstace } from "../../api";

export function Header() {
// const companies = ApiInstace()
// console.log("🚀 ~ file: Header.jsx:7 ~ Header ~ companies:", companies)

  return (
    <>
      <section className="title-page-header">
        <h1 className="title-page">
          CAPITALES DE LA REPÚBLICA POPULAR CHINA EN VENEZUELA
        </h1>
        <h2 className="text-subtitle">
          Venezuela ha sido el mayor receptor el mundo, de fondos provenientes de
          la República Popular China. ¿Cuál fue el destino de estas inversiones?
          ¿Qué se sabe?. En esta investigación se recopiló toda la información
          disponible sobre estos dineros desde el año 2000.
        </h2>
      </section>
      <section className="container mt-64 mb-140 p-1">
        <div className="box-header">
          <p>
          Con esta línea de tiempo, podrás entender mejor cuál fue el contexto lineal de los principales hechos que configuraron los fondos que ingresaron a Venezuela del país asiático.
          </p>
          <Link className="box-header-link font-m-p" to="/linea-tiempo">
          <h3>linea de tiempo - click aquí</h3>
          </Link>
        </div>
        <div>        
          <img alt="imagen-portada" className="image-pages" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"/>
        </div>
      </section>
    </>
  );
}
