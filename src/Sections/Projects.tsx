import React from "react";
import Project from "../Components/Projects";
import { Projects } from "../Components/Home/Arrays";

function Projectsec() {
  const Fade = require("react-reveal/Fade");

  const projCard: JSX.Element[] = Projects.map((card, index) => {
    return (
      <Project
        title={card.title}
        description={card.description}
        stack={card.stack}
        link={card.link}
        src={card.src}
        key={index}
      />
    );
  });
  return (
    <div className="projContents py-8 bg-light dark:bg-dark container-m">
      <div className="myProj" id="projects">
        <div className="projHead mb-5 flex justify-center">
          <div className="flex flex-row">
            <div className="mr-2 vct self-center p-1 w-10 h-1"></div>
            <Fade up>
              <h1 className="text-4xl text-white md:text-5xl font-bold">
                Recent Projects
              </h1>
            </Fade>
          </div>
        </div>

        <div className="projs text-black flex justify-center flex-wrap">
          <Fade up>{projCard}</Fade>
        </div>
      </div>
    </div>
  );
}

export default Projectsec;
