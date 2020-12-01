import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Bio.scss";
import autonomousOppidan from "../assets/Bio/autonomousOppidan.jpg";
import autonomousOppidanLow from "../assets/Bio/autonomousOppidanLow.jpg";

const Bio = () => {
  return (
    <>
      <section className="bio">
        <div className="bio-container">
          <div className="image-container">
            <ProgressiveImage
              src={autonomousOppidan}
              placeholder={autonomousOppidanLow}
            >
              {(src) => (
                <img
                  className="bio-image"
                  src={src}
                  alt="Painting - Autonomous Oppidan"
                />
              )}
            </ProgressiveImage>
          </div>
          <div className="bio-text">
            <h1>About the Artist</h1>
            <hr />
            <p>
              David Jardine was born in New Brunswick, Canada in 1984. He holds
              a diploma in Fine Arts from Langara College. Currently focusing on
              acrylic painting, he has also explored sculpture with a variety of
              mediums, such as stone, wood, and plaster. He has worked on large
              scale art installations for local festivals such as Burn in the
              Forest in Squamish, British Columbia. David was the design lead on
              the Embrace Vancouver Heart Sculpture, which was a collaborative
              work for a larger project called Embrace, which was presented at
              the Burning Man Festival in Nevada, USA, in 2014. David continues
              his exploration in the field of visual arts, and currently works
              out of his studio in East Vancouver.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
