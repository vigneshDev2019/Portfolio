import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/CSharp.png";
import Reactjs from "../../img/reactJs.png";
import Dotnet from "../../img/dotnetN.png";
import Redux from "../../img/redux.png";
import Jest from "../../img/jest.png";
import SQL from "../../img/sql.png";
import Nodejs from "../../img/nodejs.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Languages and Frameworks</span>
          <span>
            High level of coding skills with WBS (Work Breakdown Structure) to start coding
            <br />
            Write UnitTest case with Cen Percentage coverage before deployment
            <br />
            Implement DataStructure and Algorithm approach in our Task.
            <br />
            Following AGILE methodology to complete the Task
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        
        <motion.div
          initial={{ rotate: 125 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-120px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{ width: "120px", filter:"saturate(200%)" }} src={Reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width: "7rem"}} src={Dotnet} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Redux} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jest} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width: "7rem"}} src={SQL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Nodejs} alt="" />
          </div>
        </motion.div>
 
      </div>
    </div>
  );
};

export default Works;
