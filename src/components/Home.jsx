import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import ModalImage from "react-modal-image";
import "../styles/Home.scss";
import akin from "../assets/akin.jpg";
import akinLow from "../assets/akinLow.jpg";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="image-container">
          <ProgressiveImage src={akin} placeholder={akinLow}>
            {(src) => (
              <ModalImage
                className="landing-image"
                small={src}
                large={src}
                alt="Painting - Akin"
                hideDownload={true}
                hideZoom={true}
              />
              // <img className="landing-image" src={src} alt="Painting - Akin" />
            )}
          </ProgressiveImage>
          <caption className="caption-title">Akin</caption>
        </div>
      </section>
    </>
  );
};

export default Home;
