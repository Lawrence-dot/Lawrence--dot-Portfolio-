import React from "react";
import { AiFillGift, AiFillMail } from "react-icons/ai";
import {
  FaGamepad,
  FaGraduationCap,
  FaSchool,
  FaLocationArrow,
} from "react-icons/fa";

function Aboutme() {
  const Fade = require("react-reveal/Fade");
  return (
    <div className="abtContents mx-auto py-8 bg-light dark:bg-dark container-m">
      <div className="aboutMe m-0 text-white" id="about">
        <div className="abtHead flex justify-center">
          <div className="flex flex-row">
            <div className="mr-2 self-center p-1 w-8 vct"></div>
            <Fade up>
              <h1 className="text-4xl md:text-5xl font-bold"> About Me </h1>
            </Fade>
          </div>
        </div>

        <div className="flex flex-wrap abtbdy mt-3 mb-7 flex-col">
          <div className="w-full flex mb-2 abtdimg flex-col sm:flex-row">
            <div className="abtImg">
              <Fade up>
                <img
                  className="h-100 dark:grayscale"
                  src={require("../Assets/me.jpg")}
                  height="30px"
                  alt="L-dot"
                />
              </Fade>
            </div>

            <div className="abttext mt-3 flex sm:ml-5">
              <Fade up>
                <p className="text-left my-auto text-sm">
                  {" "}
                  My Name is Ojediran Lawrence. A Software Engineer with deep
                  passion for design and development of software products. I
                  Design and Build Profesional, Creative, Interactive and
                  Responsive Websites and Web Applications. I also design web
                  applications with topnotch user experience and user
                  interfaces. I also Enjoy creating and deploying topnotch and
                  creative software solutions. I also have a great team spirit,
                  i enjoy working together in teams to ensure smooth and quick
                  delivery of software solutions.
                </p>
              </Fade>
            </div>
          </div>

          <div className="myInfo flex my-2">
            <ul className="infoList flex grid sm:grid-cols-2 text-left justify-left text-sm font-sans">
              <Fade up>
                <li className="infoBirtday">
                  <AiFillGift /> Birthday: 28th August
                </li>
                <li className="infoInterest">
                  <FaGamepad />
                  Interests: Gaming, Reading
                </li>
                <li className="infoDegree flex">
                  <FaGraduationCap /> Degree: B.Eng Computer Engineering
                </li>
                <li className="infoSchool flex">
                  <FaSchool color="red" />
                  School: Olabisi Onabanjo University
                </li>
                <li className="infoLocation">
                  <FaLocationArrow />
                  Location: Lagos, Nigeria
                </li>
                <li className="infoMail">
                  <AiFillMail />
                  Email: damilareojediran3@gmail.com
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
