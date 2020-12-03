import React, { useEffect, useState } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import galleryObjects from "../helpers/galleryObjects";
import "../styles/Painting.scss";

const Painting = () => {
  const [index, setIndex] = useState(0);
  const artwork = galleryObjects;

  useEffect(() => {}, [index]);

  return (
    <>
      <section className="painting">
        <div className="painting-container">
          <ProgressiveImage
            src={artwork[index].high}
            placeholder={artwork[index].low}
          >
            {(src) => (
              <img className="slide" src={src} alt={artwork[index].title} />
            )}
          </ProgressiveImage>
          <div className="info">
            <h1 className="title">{artwork[index].title}</h1>
            <h3>{artwork[index].size}</h3>
            <h3>{artwork[index].medium}</h3>
          </div>
          <div className="arrow-btns">
            {index !== 0 ? (
              <i
                onClick={() => setIndex(index - 1)}
                className="fas fa-chevron-circle-left fa-2x"
              ></i>
            ) : (
              <i
                style={{ visibility: "hidden" }}
                className="fas fa-chevron-circle-left fa-2x"
              ></i>
            )}

            {index !== artwork.length - 1 ? (
              <i
                onClick={() => setIndex(index + 1)}
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
      </section>
    </>
  );
};

export default Painting;
