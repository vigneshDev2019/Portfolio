import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="email-name">vigneshdev2022@gmail.com</span>
        <div className="f-icons">
          <Gitub color="white" size={"3rem"} onClick={() => window.open("https://github.com/vigneshDev2019", '_blank')} />
          <LinkedIn color="white" size={"3rem"} onClick={() => window.open("https://www.linkedin.com/in/vignesh-m-a9898b145/", '_blank')} />
          <Insta color="white" size={"3rem"} onClick={() => window.open("https://www.instagram.com/vigneshm372/", '_blank')}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
