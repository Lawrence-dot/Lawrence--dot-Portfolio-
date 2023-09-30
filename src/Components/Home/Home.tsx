import React, { RefObject, useContext, useRef, useState } from "react";
import { navContext } from "../../Container/App";
import { navType } from "../../Interfaces/types";
import {
  SiTypescript,
  SiCplusplus,
  SiBootstrap,
  SiFirebase,
  SiJquery,
  SiTailwindcss,
  SiReact,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiWhatsapp,
  SiLinkedin,
  SiJavascript,
} from "react-icons/si";
import { AiFillGift, AiFillMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import {
  FaGamepad,
  FaGraduationCap,
  FaSchool,
  FaLocationArrow,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./Home.css";
import Project from "../Projects";
import { Projects } from "./Arrays";
const Zoom = require("react-reveal/Zoom");
const Fade = require("react-reveal/Fade");

function Home() {
  const allContext = useContext(navContext) as navType;
  const isNav: boolean = allContext.isNav;
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const nameRef: RefObject<HTMLInputElement> = useRef(null);
  const mailRef: RefObject<HTMLInputElement> = useRef(null);
  const messageRef: RefObject<HTMLInputElement> = useRef(null);
  const navToggler = () => {
    let icon: HTMLElement | null = document.querySelector("#nav-icon");
    allContext.setNav(isNav ? false : true);
    isNav ? icon?.classList.remove("open") : icon?.classList.add("open");
  };

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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameRef.current?.value !== "" &&
      mailRef.current?.value !== "" &&
      messageRef.current?.value !== ""
    ) {
      setSending(true);
      emailjs
        .sendForm(
          "service_9q6277m",
          "template_i25cj5c",
          "#form",
          "OEDYqzhwy0dl68t7y"
        )
        .then(() => {
          form.current?.reset();
        })
        .catch(() => {
          setSending(false);
          alert("Message Not Sent");
        })
        .finally(() => {
          setSending(false);
        });
    } else {
      alert("Fill all form input fields");
    }
  };

  const closeNav = () => {
    allContext.isNav && allContext.setNav(false);
  };

  return (
    <div
      className="Home dark:backdrop-grayscale"
      onClick={closeNav}
      id={allContext.theme}
    >
      <div className="body dark:backdrop-grayscale">
        <Fade down>
          <div
            className={`homeHead mb-3 dark:bg-black-600 container-m backdrop-blur-sm py-2 sticky top-0 animate__animated animate__fadeInDown container-m flex pt-2 md:inline md:hidden`}
            id="home"
          >
            <div className="logo">
              <img
                className="w-100 transition"
                src={require("../../Assets/logo.jpg")}
                alt="Logo"
              />
            </div>

            <div className="toggler ml-auto mt-2">
              <div className="mb-2" id="nav-icon" onClick={navToggler}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </Fade>

        <div className="sectionHead ">
          <div
            className="intro container-m my-auto text-center text-white md:py-64 "
            id="homeHead"
          >
            <div className="introContents">
              <Fade down>
                {" "}
                <h1 className="text-5xl sm:text-7xl font-bold">Lawrence-Dot</h1>
              </Fade>

              <Fade up>
                <h2 className="text-xl sm:3xl"> Software Engineer</h2>
                <ul className="socialList my-2">
                  <li className="contactLink phone">
                    <a href="tel:09082547402">
                      {" "}
                      <FiPhone />
                    </a>
                  </li>
                  <li className="contactLink github">
                    <a href="https://github.com/Lawrence-dot">
                      {" "}
                      <SiGithub />
                    </a>
                  </li>
                  <li className="contactLink email">
                    <a href="mailto:damilareojediran3@gmail.com">
                      <AiFillMail />
                    </a>
                  </li>
                  <li className="contactLink whatsapp">
                    <a href="tel:09082547402">
                      <SiWhatsapp />
                    </a>
                  </li>
                  <li className="contactLink linkedin">
                    <a href="https://www.linkedin.com/in/ojediran-lawrence-43b0b41b5">
                      <SiLinkedin />
                    </a>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>

        <div className="abtContents mx-auto py-3 bg-light dark:bg-dark container-m">
          <Fade up>
            <div className="aboutMe m-0 text-white py-3" id="about">
              <div className="abtHead flex justify-center">
                <h1 className="text-4xl md:text-5xl border-left font-bold text-center mb-1">
                  About Me
                </h1>
              </div>

              <div className="flex flex-wrap abtbdy mt-7 mb-2 flex-col">
                <div className="w-full flex mb-2 abtdimg flex-col sm:flex-row">
                  <div className="abtImg">
                    <img
                      className="h-100 dark:grayscale"
                      src={require("../../Assets/me.jpg")}
                      height="30px"
                      alt="L-dot"
                    />
                  </div>

                  <div className="abttext ml-5">
                    <p className="text-left text-md lg:text-lg">
                      {" "}
                      My Name is Ojediran Lawrence. <br /> A Software Engineer
                      with deep passion for design and development of software
                      products.
                      <br /> I Design and Build Profesional, Interactive and
                      Responsive Websites and Web Applications. I also design
                      web applications with topnotch user experience and user
                      interfaces.
                    </p>
                  </div>
                </div>

                <div className="myInfo flex my-2">
                  <ul className="infoList flex grid sm:grid-cols-2 text-left justify-left text-md sm:text-lg font-sans">
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
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="skilsContent bg-white dark:bg-black opacity-90 container-m">
          <div className="mySkills show py-16 text-white" id="skills">
            <div className="skillsHead flex justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white border-left">
                {" "}
                My Skills
              </h1>
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

        <div className="projContents  py-20 bg-light dark:bg-dark container-m">
          <div className="myProj" id="projects">
            <div className="projHead mb-5 flex justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white border-left">
                Recent Projects
              </h1>
            </div>

            <div className="projs text-black flex justify-center flex-wrap">
              <Fade up>{projCard}</Fade>
            </div>
          </div>
        </div>

        <div className="contactContents container-m bg-white dark:bg-black opacity-90">
          <div
            className="contactMe py-4text-black dark:text-white"
            id="contact"
          >
            <Fade up>
              <div className="contactJHead flex justify-center">
                <h1 className="text-4xl md:text-5xl font-bold border-left my-4">
                  {" "}
                  Contact Me{" "}
                </h1>
              </div>
            </Fade>

            <Fade up>
              <div className="flex flex-col sm:flex-row justify-center">
                <div className="contactInfo mx-2 justify-end sm:w-64 flex my-auto flex-col">
                  <div className="mx-auto mt-2 sm:mt-0">
                    <span className="flex w-64 py-1 px-2 rounded my-2 border border-dark dark:border-light">
                      <FaEnvelope color="red" /> damilareojediran3@gmail.com
                    </span>
                  </div>

                  <div className="mx-auto">
                    <span className="flex w-64 py-1 px-2 rounded my-2 border border-dark dark:border-light">
                      <FiPhone color="red" /> 09082547402{" "}
                    </span>
                  </div>

                  <div className="mx-auto">
                    <span className="flex w-64 py-1 px-2 rounded my-2 border border-dark dark:border-light">
                      {" "}
                      <MdLocationPin color="red" /> Lagos, Nigeria{" "}
                    </span>
                  </div>

                  <div className="contactSocial mx-auto">
                    <ul className="flex justify-around">
                      <li className="contactLink github">
                        <a href="https://github.com/Lawrence-dot">
                          {" "}
                          <SiGithub
                            color={
                              allContext.theme === "light" ? "red" : "white"
                            }
                          />
                        </a>
                      </li>

                      <li className="contactLink email">
                        <a href="mailto:damilareojediran3@gmail.com">
                          <FaEnvelope
                            color={
                              allContext.theme === "light" ? "red" : "white"
                            }
                          />
                        </a>
                      </li>

                      <li className="contactLink whatsapp">
                        <a href="tel:09082547402">
                          <SiWhatsapp
                            color={
                              allContext.theme === "light" ? "red" : "white"
                            }
                          />
                        </a>
                      </li>

                      <li className="contactLink linkedin">
                        <a href="https://www.linkedin.com/in/ojediran-lawrence-43b0b41b5">
                          <SiLinkedin
                            color={
                              allContext.theme === "light" ? "red" : "white"
                            }
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contactForm flex justify-center">
                  <form
                    ref={form}
                    className="flex cards rounded-md border border-dark dark:border-light opacity-90 py-10 px-5 flex-col my-2"
                    onSubmit={sendEmail}
                    id="form"
                  >
                    <h1 className="text-2xl sm:text:3xl my-2">
                      {" "}
                      Got a question or Proposal For me?
                    </h1>
                    <label> Name:</label>
                    <input
                      className="my-2 p-1 rounded border border-dark dark:border-light"
                      type="text"
                      name="user_name"
                      ref={nameRef}
                    />
                    <label> Email: </label>
                    <input
                      placeholder="example@gmail.com"
                      className="my-2 p-1 rounded border border-dark dark:border-light"
                      type="text"
                      name="user_email"
                      ref={mailRef}
                    />
                    <label> Message: </label>
                    <input
                      className="my-2 p-1 rounded textBox border border-dark dark:border-light"
                      type="text"
                      name="message"
                      ref={messageRef}
                    />
                    <button
                      className="border p-1 rounded border-dark dark:border-light hover:text-white hover:bg-dark dark:hover:bg-light light:hover:bg-darks pointer"
                      type="submit"
                    >
                      {sending ? (
                        <CircularProgress size={"20px"} color="success" />
                      ) : (
                        "Send"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="flex container-m bg-light text-white dark:bg-dark justify-center">
          <Fade up>
            <p className="py-2 mb-2">&#169; Lawrence-dot 2022</p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Home;
