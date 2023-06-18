import React, { useEffect, useState } from "react";
import "../styles/dashboard.css"
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const InstractorDashboard = () => {
    const [courses, setCourses] = useState([])
    const [numStudent, setNumStudent] = useState(0)

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
    }, [courses.length])

    return (
        <div className="dashboard">
            <div className="top-section">
                <div className="student">
                    <h3>Student Number</h3>
                    <h5>{numStudent || 0}</h5>
                </div>
                <div className="cours">
                    <h3>Cours Number</h3>
                    <h5>{courses && courses.length}</h5>
                </div>
            </div>
            <div className="chart" style={{ marginBlock: "2em" }}>
                <ResponsiveContainer
                    width="100%"
                    height={400}>
                    <BarChart
                        data={courses}
                    >
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <XAxis dataKey="title" color="red" />
                        <YAxis dataKey="enrolled" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="enrolled" fill="#1275ea"></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default InstractorDashboard;
