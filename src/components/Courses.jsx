import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { courses } from "../utilities/Courses";
import CourseCard from "./CourseCard";
import "../styles/courses.css";
const Courses = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        py: "5em",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        px: "3em",
        m: "auto",
      }}
    >
      <Box sx={{ width: "100%", whiteSpace: "10px" }}>
        <Splide
          options={{
            perPage: 3,
            type: "loop",
            perMove: 1,
            focus: "center",
            autoplay: true,
            pagination: true, //this option responsible of removing the dots
          }}
        >
          {courses.map((course, i) => {
            return (
              <SplideSlide key={i}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/courseDetaile", { state: { course } })
                  }
                >
                  <CourseCard
                    key={i}
                    image={course.image}
                    title={course.title}
                    tutor={course.tutor}
                    review={course.review}
                    students={course.students.toLocaleString()}
                    price={course.price}
                    lessons={course.lessons}
                  />
                </span>
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    </Stack>
  );
};

export default Courses;
