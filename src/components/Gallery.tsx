import { Link } from "react-router-dom";

import "../styles/Gallery.scss";

export default function Gallery() {
  return (
    <>
      <section className="gallery">
        <h1>
          Galleries
          <hr />
        </h1>
        <div>
          <Link to={"/painting"}>
            <button className="paint-btn">Painting</button>
          </Link>
          <Link to={"/sculpture"}>
            <button className="sculpt-btn">Sculpture</button>
          </Link>
        </div>
      </section>
    </>
  );
}
