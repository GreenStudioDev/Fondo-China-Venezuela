import React from "react";

export function SectorInfoSection() {
  return (
    <>
      <button>Volver</button>
      <section>
        <div>
          <h4>CONTEXTO</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <hr />
          <div>
            <span>No. de Proyectos</span>
            <span>25</span>
            <span>No. de Empresas</span>
            <span>12</span>
            <span>Total Inversión</span>
            <span>USD 2.350.600</span>
            <span>% de Inversión</span>
            <span>25%</span>
          </div>
        </div>
        <div>
          <img src="./" alt="imagen del sector" />
        </div>
      </section>
    </>
  );
}
