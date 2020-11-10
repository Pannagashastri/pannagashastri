import React from "react";
import "./Projects.css";
import Card from "./Card";
import Data from "./Data";

function ReadEvery(datas) {
  return (
    <Card
      key={datas.id}
      title={datas.title}
      imgsrc={datas.imgsrc}
      text={datas.text}
    />
  );
}

const Projects = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">{Data.map(ReadEvery)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
