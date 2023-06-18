import React, { useEffect, useState } from "react";
import "../styles/dashboard.css"
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto"
const InstractorDashboard = () => {
    const [courses, setCourses] = useState([])
    const [numStudent, setNumStudent] = useState(0)
    const [months, setMonths] = useState([])
    const [coursData, setCoursData] = useState({
        labels: [months],
        datasets: [{
            label: "Number Of Courses",
            data: courses.length
        }]
    })
    useEffect(() => {
        const getData = async () => {
            const token = sessionStorage.getItem("token")
            const response = await axios.get("http://localhost:8000/api/cour", {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            setCourses(response.data.data)
        }
        getData()
    }, [courses])
    useEffect(() => {
        courses.forEach((cours) => {
            setNumStudent((prev) => prev + parseInt(cours.enrolled))
        })
    }, [courses, numStudent])
    useEffect(() => {
        courses.map((cours) => {
            const month = new Date(cours.created_at)
            setMonths(month.getMonth() + 1)
        })
    }, [courses])
    console.log(months)
    return (
        <div className="dashboard">
            <div className="top-section">
                <div className="student">
                    <h4>Student Number</h4>
                    <span>{numStudent || 0}</span>
                </div>
                <div className="cours">
                    <h4>Cours Number</h4>
                    <span>{courses && courses.length}</span>
                </div>
            </div>
            <div className="chart">
                <Bar data={coursData} />
            </div>
        </div>
    );
};

export default InstractorDashboard;
