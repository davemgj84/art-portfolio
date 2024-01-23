import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./index.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Painting from "./components/Painting";
import Sculpture from "./components/Sculpture";
import Bio from "./components/Bio";
import Statement from "./components/Statement";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/sculpture" element={<Sculpture />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
