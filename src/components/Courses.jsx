import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { courses } from "../utilities/Courses";
import CourseCard from "./CourseCard";
import "../styles/courses.css";
import axios from "axios";


const Courses = () => {
  const navigate = useNavigate();
  const [bestCourses, setBestCourses] = useState([])
  useEffect(() => {
    const token = sessionStorage.getItem("token")
    const getData = async () => {
      const myCourses = await axios.get("http://127.0.0.1:8000/api/cour", {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      setBestCourses(myCourses.data.data)
    }
    getData()
    // console.log(bestCourses)
  }, [])
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
            perPage: bestCourses.slice(0, 4).length >= 3 ? 3 : bestCourses.slice(0, 4).length,
            type: "loop",
            perMove: 1,
            focus: "center",
            autoplay: true,
            pagination: true,
            paginationKeyboard: true,
            breakpoints: {
              640: {
                perPage: 2,
              },
            }
          }}
        >
          {bestCourses && bestCourses.map((course, i) => {
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
                    image={`http://127.0.0.1:8000/images/${course.image}`}
                    title={course.title}
                    tutor={course.tutor}
                    // review={course.review}
                    // students={course.students.toLocaleString()}
                    price={course.price}
                  // lessons={course.lessons}
                  />
                </span>
              </SplideSlide>
            );
          }).slice(0, 4)}
        </Splide>
      </Box>
    </Stack>
  );
};

export default Courses;
