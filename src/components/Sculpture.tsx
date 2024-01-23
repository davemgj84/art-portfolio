import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

import "../styles/Sculpture.scss";
import { sculptures } from "../db/sculptures";

export default function Sculpture() {
  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setIndex((prev) => prev - 1);
  };

  const artwork = sculptures[index];
  const totalArtwork = sculptures.length - 1;

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
                  onClick={handleBack}
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
                  onClick={handleNext}
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
}
