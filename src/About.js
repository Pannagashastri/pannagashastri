import React from "react";
import web from "../src/images/about.svg";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact now"
      />
    </>
  );
};
export default About;
