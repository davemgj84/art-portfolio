import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import sculptureObjects from "../db/sculptureObjects";
import "../styles/Sculpture.scss";

const Sculpture = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const back = () => {
    setIndex((prev) => prev - 1);
  };

  const artwork = sculptureObjects[index];
  const totalArtwork = sculptureObjects.length - 1;

  return (
    <>
      <section className="sculpture">
        <div className="sculpture-container">
          <LazyLoadImage
            className="slide"
            alt={artwork.title}
            src={artwork.high}
            effect="blur"
            placeholderSrc={artwork.low}
          />
        </div>
        <div className="info-container">
          <div className="info">
            <h1 className="title">{artwork.title}</h1>
            <h3>{artwork.size}</h3>
            <h3>{artwork.medium}</h3>
            <div className="arrow-btns">
              {index !== 0 ? (
                <i
                  onClick={back}
                  className="fas fa-chevron-circle-left fa-2x"
                ></i>
              ) : (
                <i
                  style={{ visibility: "hidden" }}
                  className="fas fa-chevron-circle-left fa-2x"
                ></i>
              )}

              {index !== totalArtwork ? (
                <i
                  onClick={next}
                  className="fas fa-chevron-circle-right fa-2x"
                ></i>
              ) : (
                <i
                  style={{ visibility: "hidden" }}
                  className="fas fa-chevron-circle-right fa-2x"
                ></i>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sculpture;
