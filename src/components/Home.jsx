import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Home.scss";
import akin from "../assets/akin.jpg";
import akinLow from "../assets/akinLow.jpg";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div>
          <ProgressiveImage src={akin} placeholder={akinLow}>
            {(src) => (
              <img className="landing" src={src} alt="Painting - Akin" />
            )}
          </ProgressiveImage>
        </div>
      </section>
    </>
  );
};

export default Home;
