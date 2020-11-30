import React from "react";
import { Link } from "react-router-dom";
// import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Gallery.scss";

const Gallery = () => {
  return (
    <>
      <section className="gallery">
        <h1>
          Galleries
          <hr />
        </h1>
        <div>
          <Link to={"/painting"}>
            <button className="paint-btn">Painting</button>
          </Link>
          <Link to={"/sculpture"}>
            <button className="sculpt-btn">Sculpture</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;
