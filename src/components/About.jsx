import React, { useState } from "react";
import "../styles/about.css"
import onlineLearning from "../assets/onlineLearning.gif"
const About = () => {
    const [lat, setLat] = useState(32.00000000)
    const [long, setLong] = useState(-5.00000000)
    return (
        <div className="about-container">
            <div className="story">
                <h1>H<span style={{ color: "#1275EA" }}>OO</span>MSCHOOLE</h1>
                <p>Our company is an innovative e-learning platform dedicated to providing high-quality online courses for individuals seeking to learn and grow from the comfort of their own homes. We understand that traditional learning environments may not always be accessible or convenient for everyone, which is why we have created a comprehensive digital learning experience. Through our platform, learners have access to a vast array of courses across various disciplines, ranging from web development and design to business and personal development. Our expert instructors, who are industry professionals and subject matter experts, deliver engaging and interactive content that is tailored to meet the diverse learning needs of our students. We offer flexible learning schedules, allowing individuals to study at their own pace and fit learning into their busy lives. With our user-friendly interface and cutting-edge technologies, students can easily navigate through the course materials, access resources, participate in discussions, and track their progress. Our mission is to empower individuals by providing them with the knowledge and skills they need to achieve their personal and professional goals, no matter where they are located or what their background may be</p>
            </div>
            <div>
                <img src={onlineLearning} alt="pic" />
            </div>
        </div>
    );
};

export default About;
