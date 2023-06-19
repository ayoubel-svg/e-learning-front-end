import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import "../styles/allCourse.css";
import CircularProgress from '@mui/material/CircularProgress';

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const getData = async () => {
            const response = await axios.get("http://localhost:8000/api/cour", {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setAllCourses(response.data.data);
            setFilteredCourses(response.data.data);
        };
        getData();
    }, []);

    function handleChange(e) {
        const { value } = e.target;
        setTerm(value);
    }

    useEffect(() => {
        const filtered = allCourses.filter((course) =>
            course.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCourses(filtered);
    }, [term, allCourses]);

    if (allCourses.length === 0) {
        return <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><CircularProgress /></div>;
    }

    return (
        <div className="all-courses-container">
            <div style={{ width: "40%", paddingLeft: "3em" }}>
                <input
                    type="text"
                    name="term"
                    placeholder="Search For Course *"
                    style={{ padding: "10px", width: "100%" }}
                    onChange={handleChange}
                />
            </div>
            <div className="part1">
                {filteredCourses.map((course, i) => (
                    <CourseCard
                        key={i}
                        image={`http://127.0.0.1:8000/images/${course.image}`}
                        title={course.title}
                        tutor={course.tutor}
                        price={course.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
