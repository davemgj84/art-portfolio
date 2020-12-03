import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import galleryObjects from "../helpers/galleryObjects";
import "../styles/Painting.scss";

const Painting = () => {
  const artwork = galleryObjects;
  return (
    <>
      <section className="painting">
        <div className="painting-container">
          <ProgressiveImage src={artwork[0].high} placeholder={artwork[0].low}>
            {(src) => (
              <img className="slide" src={src} alt={artwork[0].title} />
            )}
          </ProgressiveImage>
          <div className="info">
            <h1 className="title">{artwork[0].title}</h1>
            <h3>{artwork[0].size}</h3>
            <h3>{artwork[0].medium}</h3>
          </div>
          <div className="arrow-btns">
            <i class="fas fa-chevron-circle-left fa-2x"></i>
            <i class="fas fa-chevron-circle-right fa-2x"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Painting;
