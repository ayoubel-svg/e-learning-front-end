import React, { useEffect, useState } from "react";
import "../styles/courseContainer.css";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/courseInfo.css";
import BreadCrumb from "./BreadCrumb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LockIcon from "@mui/icons-material/Lock";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FeedIcon from "@mui/icons-material/Feed";
import LanguageIcon from "@mui/icons-material/Language";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CustomAccordion from "./CustomAccordion";
import { Curriculms } from "../utilities/FakeData";
const CourseDetaile = () => {
  const [isCurriculm, setIsCurriculm] = useState(false);
  const { course } = useLocation().state;
  console.log(course)
  const navigate = useNavigate()
  return (
    <div className="course-container">
      <div className="cours-head">
        <h1>Course Details</h1>
        <BreadCrumb />
      </div>
      <div className="course-box">
        <h1>{course.title}</h1>
        <div>
          <p className="head">
            <span
              style={{
                color: isCurriculm ? "" : "#1275EA",
                borderBottom: isCurriculm ? "" : "2.5px solid  #1275EA",
              }}
              onClick={() => setIsCurriculm(false)}
            >
              Overview
            </span>
            <span
              style={{
                color: isCurriculm ? "#1275EA" : "",
                borderBottom: isCurriculm ? "2.5px solid  #1275EA" : "",
              }}
              onClick={() => setIsCurriculm(true)}
            >
              Curriculum
            </span>
          </p>
          <div className="content">
            <div
              className="description"
              style={{ display: isCurriculm ? "none" : "" }}
            >
              <h4>Course Description</h4>
              <p>
                {course.description}
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2em" }}
            >
              {Curriculms.map((data, i) => {
                return (
                  <CustomAccordion
                    id={i}
                    title={data.title}
                    subTitle1={data.subTitle1}
                    subTitle2={data.subTitle2}
                    subTitle3={data.subTitle3}
                    subTitle4={data.subTitle4}
                    isCurriculm={isCurriculm}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="cours-board">
          <img src={`http://localhost:8000/images/${course.image}`} alt="pic" />
          <div className="cours-titles">
            <p
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <AccessTimeFilledIcon /> Duration
              </span>
              <span>{course.Duration} min</span>
            </p>
            <p
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <PeopleAltIcon /> Enrolled
              </span>
              <span>{course.enrolled}</span>
            </p>
            <p
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <PeopleAltIcon /> Price
              </span>
              <span>{course.Price} $</span>
            </p>
            <p
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <FeedIcon /> Lectures
              </span>
              <span>15</span>
            </p>
            <p
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <LanguageIcon /> Language
              </span>
              <span>{course.language}</span>
            </p>
            <p
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <WorkspacePremiumIcon /> Certifecat
              </span>
              <span>No</span>
            </p>
          </div>
          <button onClick={() => navigate("/coursevideos", { state: { id: course.id } })}>Enrole</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetaile;
