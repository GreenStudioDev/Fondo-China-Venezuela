import React from "react";
import ForestIcon from "@mui/icons-material/Forest";

export function CompanyContextSection() {
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
        </div>
        <hr />
        <div>
          <div>
            <h6>Sectores</h6>
          </div>
          <div>
            <ForestIcon />
            <span>Agricultura</span>
          </div>
        </div>
      </section>
    </>
  );
}
