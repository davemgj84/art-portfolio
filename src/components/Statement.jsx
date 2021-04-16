import React from "react";
import "../styles/Statement.scss";
import conversation from "../assets/Statement/conversation.jpg";
import conversationLow from "../assets/Statement/conversationLow.jpg";

const Statement = () => {
  return (
    <>
      <section className="statement">
        <div className="statement-container">
          <div className="image-container">
            {/* <ProgressiveImage src={conversation} placeholder={conversationLow}>
              {(src) => (
                <img
                  className="statement-image"
                  src={src}
                  alt="Painting - Conversation"
                />
              )}
            </ProgressiveImage> */}
          </div>
          <div className="statement-text">
            <h1>Artist Statement</h1>
            <hr />
            <p>
              I am interested in the subconscious, our dreams, and our inner
              worlds. I often lay in bed, having just awoken, attempting to
              piece together aspects of the dreams I have just experienced. I am
              curious about these altered states, and the perspectives they may
              have to offer me in my daily reality.
            </p>

            <p>
              My work is an examination of these states of awareness. I like to
              work quickly, in an automatic manner, to produce work that offers
              a glimpse into these internal spaces. These spaces are often
              abstract, primal, and emotive.
            </p>

            <p>
              I am inspired by aspects of surrealism, automatism, abstract
              expressionism, and street art or graffiti. I like the
              improvisation and spontaneity taken from these approaches,
              allowing my subconscious to inform the work. Similar to a
              Rorschach inkblot, I enjoy interpreting the early stages of my
              compositions, where I can then refine and render the imagery that
              I discover. They often remain abstract, but can at times show
              elements of portraiture or figurative drawing. I like to work with
              acrylic paints, as they are fast drying and allow the buildup of
              multiple layers in a shorter period of time. I prefer vibrant and
              saturated colors, which give more life to the ideas and concepts I
              am portraying.
            </p>

            <p>
              I am also interested in sculpture. Using a similar approach to my
              early stages of painting, I like to work quickly, drawing and
              sketching, to create and discover abstract shapes and forms. To
              bring these forms into a three dimensional space, I enjoy
              experimenting with a variety of mediums such as stone, wood,
              concrete, plaster, fiberglass, or found materials. I am intrigued
              by public art installations and interactive works. In the future I
              want my sculptures to be experienced in everyday life, and not
              necessarily in a gallery or exhibition. I believe it is important
              for people to come face to face with art everyday.
            </p>

            <p>
              Some artists I am currently inspired by are Doze Green, Mario
              Martinez, Marco Cochrane, David Robinson, Georges Braque,
              Jean-Michel Basquiat, and Henry Moore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statement;
