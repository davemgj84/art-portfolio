import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../styles/Home.scss";
import akin from "../assets/Home/akin.jpg";
import akinLow from "../assets/Home/akinLow.jpg";

export default function Home() {
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
}
