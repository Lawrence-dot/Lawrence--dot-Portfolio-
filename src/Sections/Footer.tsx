import React from "react";

function Footer() {
  const Fade = require("react-reveal/Fade");

  return (
    <div className="flex footer container-m bg-light text-white dark:bg-dark justify-center">
      <Fade up>
        <p className="py-2 mb-2">&#169; Lawrence-dot 2022</p>
      </Fade>
    </div>
  );
}

export default Footer;
