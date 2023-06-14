import React, { useEffect, useRef, useState } from "react";
import circles from "../assets/circles.png";
import "../styles/home.css";
import partenaire from "../assets/partenaire.png";
import Tutors from "./Tutors";
import onlineLearning from "../assets/onlineLearning.gif";
import Courses from "./Courses";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Home = () => {
  const hero = useRef();
  const [heroHeight, setHeroHeight] = useState(null);
  const detecSize = () => {
    setHeroHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", detecSize);

    return () => {
      window.removeEventListener("scroll", detecSize);
    };
  }, [heroHeight]);
  return (
    <div>
      <div id="hero" ref={hero} className="hero">
        <div className="main-section">
          <div className="section1">
            <div className="circle-container">
              <img className="home-circle" src={circles} alt="circle" />
            </div>
            <div className="slogan">
              <h1>
                Up Your <span>Skills</span> To <span>Advance</span> Your{" "}
                <span>Career</span> Path
              </h1>
              <p>
                Provides you with the latest online learning system and material
                that help your knowledge growing.
              </p>
              <div>
                <button className="slogan-btn">Get Started</button>
              </div>
            </div>
          </div>
          <div className="section2 d-none d-lg-block">
            <img src={onlineLearning} alt="student" />
          </div>
        </div>
        {/* <Box className="section3" sx={{ display: { xs: "none", md: "block" } }}>
          <img src={partenaire} alt="udemy" />
        </Box> */}
        <div className="scroll-down">
          <KeyboardArrowDownIcon className="arrow" />
        </div>
      </div>
      <a
        href="/"
        onClick={() => window.scrollTo(0, 0)}
        className="arrow-up"
        style={{
          visibility: heroHeight > 100 ? "visible" : "hidden",
        }}
      >
        <KeyboardArrowUpIcon className="arrow" />
      </a>
      <Courses />
      <Tutors />
    </div>
  );
};

export default Home;
