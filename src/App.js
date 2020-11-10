import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import React from "react";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
