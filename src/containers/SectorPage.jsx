import React from "react";
import { useParams } from "react-router-dom";
import { blogdata } from "../api/blogData";


export function SectorPage() {
  const { slug } = useParams();
  console.log("🚀 ~ file: Sector.jsx:6 ~ Sector ~ slug", slug);
  const currentSector = blogdata.find((post) => post.sulg === slug);


  return (
    <>
      <h2>{currentSector.title}</h2>
      <p>{currentSector.content}</p>
      <p>{currentSector.author}</p>
    </>
  );
}

