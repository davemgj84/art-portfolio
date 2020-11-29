import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Bio from "./components/Bio";
import Statement from "./components/Statement";
import Contact from "./components/Contact";

function App() {
  const _ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  };
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Nav />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/bio" component={Bio} />
          <Route path="/statement" component={Statement} />
          <Route path="/contact" component={Contact} />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
