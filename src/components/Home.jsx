import React from "react";
import "../styles/Home.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import akin from "../assets/Home/akin.jpg";
import akinLow from "../assets/Home/akinLow.jpg";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="image-container">
          <LazyLoadImage
            className="landing-image"
            alt={"Painting - Akin"}
            src={akin}
            effect="blur"
            placeholderSrc={akinLow}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
