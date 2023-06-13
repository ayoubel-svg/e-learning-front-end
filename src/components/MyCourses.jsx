import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../styles/MyCourses.css"
const MyCourses = () => {
    const [courses, setCourses] = useState([])
    const [newError, setNewError] = useState("")
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        const getData = async () => {
            try {
                const theCourses = await axios.get("http://localhost:8000/api/cour", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setCourses(theCourses.data.data)
            } catch (error) {
                setNewError(error)
            }
        }
        getData()
    }, [])
    if (courses.length === 0) return "loading ..."
    return (
        <div>
            {newError && <ErrorComponent error={newError} />}
            <table className="cours-table">
                <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((cours) => {
                        return (
                            <tr>
                                <td style={{ padding: "10px" }}>{cours.title}</td>
                                <td style={{ padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", borderLeft: "none", borderTop: "none" }}>
                                    <DeleteIcon style={{ color: "#1275ea" }} />
                                    <EditIcon style={{ color: "#1275ea" }} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MyCourses;
