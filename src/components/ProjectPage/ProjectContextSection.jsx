import React from "react";
import { Forest } from "@mui/icons-material";

export function ProjectContextSection() {
  return (
    <>
      <button>Volver</button>
      <section>
        <div>
          <h4>Descripción</h4>
          <div>
            <Forest sx={{ fontSize: 50 }}/>
            <h5>Agricultura</h5>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div>
        </div>
      </section>
    </>
  );
}
