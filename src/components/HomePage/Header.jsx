import React from "react";
import "../../styles";
import { Link } from "react-router-dom";
// import { ApiInstace } from "../../api";

export function Header() {

  return (
    <>
      <section className="title-page-header">
        <h1 className="title-page">CHINA - VENEZUELA JOINT FUNDS</h1>
        <img
          src="https://fundacionandresbello.org/bannerfad-02"
          alt="imagen banner"
        />
        <h2 className="text-subtitle">
        Fundación Andrés Bello has developed this interactive database, which contains comprehensive information about the companies, projects, and individuals involved in the China-Venezuela joint funds between 2007 and 2017. The data is categorized by sectors, offering detailed insights into investment amounts per project and their current status. This tool provides valuable context on the significant events that influenced the funds received by Venezuela from China during this period
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
              color: "var(--mdc-theme-on-background)",
              lineHeight: "45px",
            }}
          >
            Please follow this link to access the executive report titled "Follow-up of the joint Sino-Venezuelan funds" by the research team at Fundación Andrés Bello
          </p>
        </a>
      </section>
      <section className="containerfcv mt-64 mb-140 p-1">
        <div className="box-header">
          <p>
          This timeline provides a clear chronological context for the major events that influenced the funds received by Venezuela from the Asian country, enabling a better understanding of their linear progression
          </p>
          <Link
            className="box-header-link font-m-p"
            to="/en/china-venezuela-funds/timeline"
          >
            <h3 style={{fontSize: "1.17rem"}}>Timeline - click here</h3>
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
