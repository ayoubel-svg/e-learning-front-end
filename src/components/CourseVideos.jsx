import React, { useEffect, useState } from "react";
import "../styles/videos.css"
import axios from "axios";
import { useLocation } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Star from "./Star";


const CourseVideos = () => {
    const { id } = useLocation().state
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(0)
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/video/${id}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setVideos(() => {
                    return response.data.map((video, i) => {
                        return {
                            id: i,
                            name: decodeURIComponent(video.name)
                        }
                    })
                })
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [id])
    if (videos.length === 0) return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
        <CircularProgress />
    </div>
    console.log(videos[selectedVideo].name)
    return (
        <div className="videos-container">
            <div className="sub-video-container">
                <div className="video">
                    <video src={`http://localhost:8000/videos/${videos[selectedVideo].name}`} autoPlay controls></video>
                </div>
                <div className="sub-video">
                    {videos && videos.map((video, i) => {
                        return (
                            <span onClick={() => setSelectedVideo(video.id)} className="video-title">
                                {`${i} - ${video.name}`}
                            </span>
                        )
                    })}
                </div>
            </div >
            <div className="comment" style={{ paddingTop: "5em" }}>
                <Star />
                <textarea name="comment" cols="30" rows="10" placeholder="Comment *"></textarea>
            </div>
        </div>
    );
};

export default CourseVideos;
