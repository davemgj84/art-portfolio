import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Contact.scss";
import fruition from "../assets/Contact/fruition.jpg";
import fruitionLow from "../assets/Contact/fruitionLow.jpg";

const Contact = () => {
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
            <a
              href="mailto:info@artbydavidjardine.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className="far fa-envelope"></i>info@artbydavidjardine.com
            </a>
            <a
              href="https://www.instagram.com/david_jardine_art/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>Instagram
            </a>
            <a
              href="https://www.facebook.com/Art-by-David-Jardine-436081926483381"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
