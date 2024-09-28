import React, { RefObject, useContext, useRef, useState } from "react";
import { navContext } from "../../Container/App";
import { navType } from "../../Interfaces/types";
import { SiGithub, SiWhatsapp, SiLinkedin } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./Home.css";
import Aboutme from "../../Sections/Aboutme";
import Sections from "../../Sections/Sections";
import Projectsec from "../../Sections/Projects";
import Footer from "../../Sections/Footer";
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
          nameRef!.current!.value = "";
          mailRef!.current!.value = "";
          messageRef!.current!.value = "";
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
              <div
                className="mb-2 flex justify-right"
                id="nav-icon"
                onClick={navToggler}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </Fade>

        <div className="sectionHead">
          <div
            className="intro flex items-center container-m my-auto text-center text-white md:py-64 "
            id="homeHead"
          >
            <div className="introContents container-m">
              <Fade down>
                {" "}
                <h1 className="text-5xl my-2 sm:text-7xl font-bold">
                  Lawrence-Dot
                </h1>
              </Fade>

              <Fade up>
                <h2 className="text-xl sm:3xl"> Software Engineer</h2>
                <ul className="socialList my-2">
                  <li className="contactLink phone">
                    <a href="tel:07062582657">
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

        <Aboutme />

        <Sections />

        <Projectsec />

        <div className="contactContents container-m bg-white dark:bg-black opacity-90">
          <div
            className="contactMe py-8 text-black dark:text-white"
            id="contact"
          >
            <div className="contactJHead flex justify-center">
              <div className=" mb-7 flex flex-row">
                <div className="mr-2 self-center p-1 w-8 h-1 vct"></div>
                <Fade up>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {" "}
                    Contact Me{" "}
                  </h1>
                </Fade>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center">
              <div className="contactInfo mx-2 justify-end sm:w-64 flex my-auto flex-col">
                <div className="mx-auto mt-2 sm:mt-0">
                  <Fade up>
                    <span className="flex w-64 items-center py-1 px-2 rounded my-2 border border-dark dark:border-light">
                      <FaEnvelope color="red" /> damilareojediran3@gmail.com
                    </span>
                  </Fade>
                </div>

                <div className="mx-auto">
                  <Fade up>
                    <span className="flex w-64 items-center py-1 px-2 rounded my-2 border border-dark dark:border-light">
                      <FiPhone color="red" /> 09082547402{" "}
                    </span>
                  </Fade>
                </div>

                <div className="mx-auto">
                  <Fade up>
                    <span className="flex w-64 items-center py-1 px-2 rounded my-2 border border-dark dark:border-light">
                      {" "}
                      <MdLocationPin color="red" /> <span>Lagos,Nigeria</span>
                    </span>
                  </Fade>
                </div>
                <Fade up>
                  <div className="contactSocial my-2 mx-auto">
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
                </Fade>
              </div>

              <div className="contactForm flex justify-center">
                <Fade up>
                  <form
                    ref={form}
                    className="flex cards rounded-md border border-dark dark:border-light opacity-90 py-10 px-5 flex-col my-2"
                    onSubmit={sendEmail}
                    id="form"
                  >
                    <h1 className="text-2xl sm:text:3xl my-2 font-bold">
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
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
