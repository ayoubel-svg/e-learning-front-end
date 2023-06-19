import React from "react";
import "../styles/courseDetaille.css";
import Star from "./Star";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import StarRateIcon from "@mui/icons-material/StarRate";
const CourseCard = (props) => {
  const { image, title, tutor, review, students, price, lessons } = props;
  return (
    <div className="course-detaille">
      <img src={image} alt="pic" />
      <div className="cours-info">
        <div className="box">
          <span style={{ color: "gray" }}>By {tutor}</span>
          <span style={{ color: "gray" }}>
            <PlayLessonIcon className="lesson" />
            {lessons} Lessons
          </span>
        </div>
        <div
          className="box"
          style={{ borderBottom: "1px solid #ccc", padding: "10px" }}
        >
          <h4>{title}</h4>
        </div>
        <div className="box">
          <span>read more</span>
          <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <StarRateIcon style={{ color: "#ffc107" }} />
              <StarRateIcon style={{ color: "#ffc107" }} />
              <StarRateIcon style={{ color: "#ffc107" }} />
              <StarRateIcon style={{ color: "#ffc107" }} />
              <StarRateIcon style={{ color: "#ffc107" }} />
            </span>
            4.8
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
