import React from "react";
import StarIcon from '@mui/icons-material/Star';
import "../styles/tutorDetaille.css"
const TutorDetaille = (props) => {
    const { image, title, nb_course, review, nb_students } = props
    return (
        <div className="tutor-detaille">
            <img src={image} alt={title} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{title}</span>
                <span style={{ color: "#1275EA", "textDecoration": "underline" }}>{nb_course} Courses</span>
                <p style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><StarIcon sx={{ color: "#EDC90E" }} /><span>{review}</span><span style={{
                    marginLeft: "10px", color: "gray"
                }}>({nb_students})</span></p>
            </div>
        </div>
    );
};

export default TutorDetaille;
