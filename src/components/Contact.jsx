import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Contact.scss";
import fruition from "../assets/fruition.jpg";
import fruitionLow from "../assets/fruitionLow.jpg";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <div className="image-container">
            <ProgressiveImage src={fruition} placeholder={fruitionLow}>
              {(src) => (
                <img
                  className="contact-image"
                  src={src}
                  alt="Painting - Autonomous Oppidan"
                />
              )}
            </ProgressiveImage>
          </div>
          <div className="contact-text">
            <h1>Contact</h1>
            <hr />
            <a
              href="mailto:info@artbydavidjardine.com"
              rel="noreferrer"
              target="_blank"
            >
              <i class="far fa-envelope"></i>info@artbydavidjardine.com
            </a>
            <a
              href="https://www.instagram.com/david_jardine_art/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>Instagram
            </a>
            <a
              href="https://www.facebook.com/Art-by-David-Jardine-436081926483381"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fab fa-facebook"></i>Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
