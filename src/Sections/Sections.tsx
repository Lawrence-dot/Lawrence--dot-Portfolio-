import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiFirebase,
  SiBootstrap,
  SiGithub,
  SiCplusplus,
  SiTailwindcss,
} from "react-icons/si";

function Sections() {
  const Zoom = require("react-reveal/Zoom");
  const Fade = require("react-reveal/Fade");
  return (
    <div className="skilsContent bg-white dark:bg-black opacity-90 container-m">
      <div className="mySkills show py-8 text-white" id="skills">
        <div className="skillsHead flex justify-center">
          <div className="flex flex-row">
            <Fade up>
              <div className="mr-2 vct self-center p-1 w-8 h-1 bg-dark"></div>

              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                My Skills
              </h1>
            </Fade>
          </div>
        </div>
        <div className="skills flex flex-wrap justify-center text-center mt-5">
          <Zoom>
            <div className="bg-gray-700 w-1/2 md:1/3 p-3 rounded-lg m-5">
              <SiHtml5 />
              <br />
              HTML 5
            </div>

            <div className="bg-gray-700 p-3 w-1/2 md:1/3 m-5 rounded-lg">
              <SiCss3 />
              <br />
              CSS 3
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg">
              <SiReact />
              <br />
              REACT JS
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 m-5 p-3 rounded-lg">
              <SiJavascript /> <br />
              Vanila Js
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg">
              <SiTypescript size="4x" />
              <br />
              <span>Typescript</span>
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg">
              <SiJavascript />
              <br />
              Next Js
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg">
              <SiJquery />
              <br />
              jQuery
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg">
              <SiFirebase />
              <br />
              Firebase
            </div>

            <div className="bg-gray-700 p-3 w-1/2 md:1/3 m-5 rounded-lg">
              <SiBootstrap />
              <br />
              Bootstrap
            </div>

            <div className="bg-gray-700 p-3 w-1/2 md:1/3 m-5 rounded-lg">
              <SiGithub />
              <br />
              Git
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg">
              <SiCplusplus />
              <br />
              C++
            </div>

            <div className="bg-gray-700 w-1/2 md:1/3 p-3 m-5 rounded-lg ">
              <SiTailwindcss />
              <br />
              Tailwind Css
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Sections;
