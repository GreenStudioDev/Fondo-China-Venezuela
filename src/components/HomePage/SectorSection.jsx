import React from "react";
import { Link } from "react-router-dom";
import { blogdata } from "../../api";

export function SectorSection() {
  return (
    <>
      <h1>Sectores / Industrias</h1>
      <p>
        Haz click en uno de los siguientes iconos para ver el detalle por cada
        tipo de industria
      </p>
      <ul>
        {blogdata.map((sector) => (
          <SectorLink key={sector.slug} sector={sector} />
        ))}
      </ul>
    </>
  );
}

function SectorLink({ sector }) {
  return (
    <li>
      <Link to={`/sector/${sector.slug}`}>{sector.title}</Link>
    </li>
  );
}
