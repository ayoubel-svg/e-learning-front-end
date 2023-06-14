import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../styles/MyCourses.css"
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyDialogue from "./MyDialogue"
import Button from '@mui/material/Button';
const MyCourses = () => {
    const [courses, setCourses] = useState([])
    const [newError, setNewError] = useState("")
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [displayDialogue, setDisplayDialogue] = useState(false)
    const [choosedId, setChooseId] = useState(0)
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
        console.log(courses)

    }, [deleteStatus])
    const theError = () => {
        toast.error("error occurd", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    const success = (message) => {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    async function handleDelete(id) {
        const res = window.confirm("you want to delete this cours");
        if (res) {
            try {
                const token = sessionStorage.getItem("token")
                await axios.delete(`http://localhost:8000/api/cour/${id}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                success("Cours Deleted")
                setDeleteStatus(prev => !prev)
            } catch (error) {
                setNewError(error)
                theError()
            }
        }
    }

    if (courses.length === 0) return <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><CircularProgress /></div>
    return (
        <>
            {displayDialogue && <MyDialogue open={displayDialogue} id={choosedId} />}
            {newError && <ErrorComponent error={newError} color="red" />}
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
                                    <span style={{ cursor: "pointer" }} onClick={() => handleDelete(cours.id)}>
                                        <DeleteIcon style={{ color: "#1275ea" }} />
                                    </span>
                                    <span style={{ cursor: "pointer" }} onClick={() => {
                                        setDisplayDialogue((prev) => !prev)
                                        setChooseId(cours.id)
                                    }}>
                                        <EditIcon style={{ color: "#1275ea" }} />
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* {handleUpdate()} */}
            <ToastContainer />

        </>
    );
};

export default MyCourses;
