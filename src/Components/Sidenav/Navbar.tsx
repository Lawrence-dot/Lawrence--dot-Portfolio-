import { useContext } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faFileCode,
  faHomeAlt,
  faStar,
  faWandMagic,
} from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { navContext } from "../../Container/App";
import { FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { navType } from "../../Interfaces/types";

function Navbar() {
  const allContext: navType = useContext(navContext) as navType;
  const isNav: boolean = allContext.isNav;

  const scrollTop = (section: string) => {
    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.querySelector(`#${section}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      allContext.setNav(false);
    }
  };

  const closeNav = () => {
    allContext.setNav(false);
  };

  return (
    <div
      className={`topNav rounded-b-md bg-lights dark:bg-darks transition py-8 `}
    >
      <div className="mb-10">
        <div className="themeToggler transition mb-16 flex justify-center">
          <FaTimes
            className="hover:fill-red-900 md:hidden"
            size="2em"
            onClick={closeNav}
          />
          <span className="hidden md:block" onClick={allContext.toggleTheme}>
            {allContext.theme === "light" ? (
              <FaMoon className="p-1" size={"1.8em"} />
            ) : (
              <FaSun className="p-1" size={"1.8em"} color="yellow" />
            )}
          </span>
        </div>
      </div>

      <div className="img-Side flex justify-center mb-10">
        <img
          className={`dark:grayscale ${
            isNav ? "topImg" : "topSide"
          } rounded-circle`}
          src="./images/pimg.png"
          alt="L-dot"
        />
      </div>

      <nav>
        <ul
          className="social"
          style={{
            display: `${isNav ? "block" : "none"}`,
          }}
        >
          <li className="social-link phone">
            <a href="tel:09082547402">
              {" "}
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>

          <li className="social-link github">
            <a href="https://github.com/Lawrence-dot">
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li className="social-link email">
            <a href="mailto:damilareojediran3@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>

          <li className="social-link whatsapp">
            <a href="tel:09082547402">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>

          <li className="social-link linkedin">
            <a href="https://www.linkedin.com/in/ojediran-lawrence-43b0b41b5">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>

        <ul className="navList">
          <Tooltip title={`${!isNav ? "Home" : ""}`} arrow placement="right">
            <li
              className="nav-link"
              id="homeA"
              onClick={() => scrollTop("home")}
            >
              {" "}
              <FontAwesomeIcon className="mr-1" icon={faHomeAlt} />
              <span
                className="ml-1"
                style={{ display: `${isNav ? "block" : "none"}` }}
              >
                {" "}
                Home{" "}
              </span>
            </li>
          </Tooltip>

          <Tooltip title={`${!isNav ? "About" : ""}`} arrow placement="right">
            <li className="nav-link" onClick={() => scrollTop("about")}>
              {" "}
              {/* <a className="flex" href="javascript:void(0)"> */}
              <FontAwesomeIcon className="mr-1" icon={faFileCode} />
              <span style={{ display: `${isNav ? "block" : "none"}` }}>
                About{" "}
              </span>
              {/* </a> */}
            </li>
          </Tooltip>

          <Tooltip title={`${!isNav ? "Skills" : ""}`} arrow placement="right">
            <li className="nav-link" onClick={() => scrollTop("skills")}>
              {" "}
              <FontAwesomeIcon className="mr-1" icon={faStar} />
              <span style={{ display: `${isNav ? "block" : "none"}` }}>
                Skills
              </span>
            </li>
          </Tooltip>

          <Tooltip
            title={`${!isNav ? "Projects" : ""}`}
            arrow
            placement="right"
          >
            <li
              className="nav-link hidden md:flex"
              onClick={() => scrollTop("projects")}
            >
              {" "}
              <a className="flex" href="#mySkills">
                <FontAwesomeIcon icon={faWandMagic} />
                <span style={{ display: `${isNav ? "block" : "none"}` }}>
                  Projects
                </span>
              </a>
            </li>
          </Tooltip>

          <Tooltip title={`${!isNav ? "Contact" : ""}`} arrow placement="right">
            <li className="nav-link" onClick={() => scrollTop("contact")}>
              {" "}
              <FontAwesomeIcon className="mr-1" icon={faAddressBook} />
              <span style={{ display: `${isNav ? "block" : "none"}` }}>
                Contact
              </span>
            </li>
          </Tooltip>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
