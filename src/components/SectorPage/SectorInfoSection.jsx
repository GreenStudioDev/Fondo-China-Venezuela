import React from "react";
import "../../styles/global.css"
import "../../styles/SectorPage.css"

export function SectorInfoSection() {
  return (
    <>
      <section className="container mt-64 mb-140 p-1">
        <div className="box-header">
          <h4 className="font-m-p">CONTEXTO</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="box-header-dates">
            <div className="box-dates">
              <span>No. de Empresas</span>
              <span>12</span>
            </div>
            <div className="box-dates">
              <span>Total Inversión</span>
              <span>USD 2.350.600</span>
            </div>
            <div className="box-dates">
              <span>% de Inversión</span>
              <span>25%</span>
            </div>
          </div>
          </div>
        <div>        
          <img className="image-pages" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"/>
        </div>
      </section>
    </>
  );
}
