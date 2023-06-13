import React, { useState } from "react";
import "../styles/courseContainer.css";
import { useLocation } from "react-router-dom";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                nemo et repudiandae hic natus provident quam, dolor laudantium
                voluptatibus rem amet quae sunt fuga magni aut optio asperiores
                sit nesciunt, vitae, libero sint ad quaerat voluptatum? Quos
                deserunt voluptas vitae aspernatur commodi architecto, doloribus
                mollitia hic, at cum eum, nulla consequatur iure? Optio sunt et
                dolorem neque magni qui veritatis, laudantium culpa. Dolor
                excepturi aliquid doloremque, alias accusantium quae facere in
                quam vitae nisi quas natus libero cumque blanditiis dolores
                beatae quis veniam, reprehenderit minima eaque quibusdam quos
                quo dolorum. Minus, accusamus qui officiis expedita asperiores,
                placeat tempore excepturi provident tempora nobis dolores
                explicabo, reprehenderit aut. Quae numquam magnam cum nulla
                delectus quos perspiciatis odit ad debitis similique laudantium
                eveniet at aspernatur eius distinctio quisquam facere officia
                voluptatem rem dolorum vero repellat, dignissimos suscipit.
                Molestias enim hic, sapiente ratione aliquid ea veniam vero
                similique ab necessitatibus molestiae nostrum, aliquam
                voluptates?
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
          <img src={course.image} alt="pic" />
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
              <span>14h:30min</span>
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
              <span>120</span>
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
              <span>English</span>
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
          <button>Enrole</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetaile;
