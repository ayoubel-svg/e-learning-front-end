import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/instractor.css";
import NewCourse from "./NewCourse";
import MyCourses from "./MyCourses";
import InstractorDashboard from "./InstractorDashboard";

const Instractor = () => {
  const [selected, setSelected] = useState("dashboard");
  const navigate = useNavigate()
  useEffect(() => {
    !sessionStorage.getItem("token") && navigate("/login")
  }, [navigate])
  return (
    <div className="instractor-container">
      <aside className="sidebar">
        <span
          onClick={() => setSelected("dashboard")}
          style={{
            background: selected === "dashboard" ? "#1275EA" : "",
            color: selected === "dashboard" ? "#fff" : "",
          }}
        >
          Dshboards
        </span>
        <span
          onClick={() => setSelected("mycourse")}
          style={{
            background: selected === "mycourse" ? "#1275EA" : "",
            color: selected === "mycourse" ? "#fff" : "",
          }}
        >
          My Courses
        </span>
        <span
          onClick={() => setSelected("newcourse")}
          style={{
            background: selected === "newcourse" ? "#1275EA" : "",
            color: selected === "newcourse" ? "#fff" : "",
          }}
        >
          New Course
        </span>
      </aside>
      <div className="content-container">
        <div
          className="dashboard"
          style={{
            display: selected === "dashboard" ? "" : "none",
          }}
        >
          <InstractorDashboard />
        </div>
        <div
          className="my-courses"
          style={{
            display: selected === "mycourse" ? "" : "none",
          }}
        >
          <div className="my-table">
            <MyCourses />
          </div>
        </div>
        <div className="newcourse" style={{
          display: selected === "newcourse" ? "" : "none",
        }}>
          <NewCourse />
        </div>
      </div>
    </div>
  );
};

export default Instractor;
