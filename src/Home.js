import React from "react";
import web from "../src/images/home.svg";
import "./Home.css";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Build your webApplication with "
        imgsrc={web}
        visit="/projects"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
