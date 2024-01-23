import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../styles/Contact.scss";
import fruition from "../assets/Contact/fruition.jpg";
import fruitionLow from "../assets/Contact/fruitionLow.jpg";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <div className="image-container">
            <LazyLoadImage
              className="contact-image"
              alt={"Painting - Autonomous Oppidan"}
              src={fruition}
              effect="blur"
              placeholderSrc={fruitionLow}
            />
          </div>
          <div className="contact-text">
            <h1>Contact</h1>
            <hr />
            <a href="mailto:davemgj@gmail.com" rel="noreferrer" target="_blank">
              <i className="far fa-envelope"></i>davemgj@gmail.com
            </a>
            <a
              href="https://www.instagram.com/david_jardine_art/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
