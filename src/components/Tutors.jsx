import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import "../styles/tutor.css"
import { myTutors } from "../utilities/tutors"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TutorDetaille from "./TutorDetaille";
import plant from "../assets/Plant Right.png"
const Tutors = () => {
    return (
        <Stack className="tutor-container" sx={{ py: "5em", width: "100%", height: "100vh", display: "flex", flexDirection: "column", px: "3em" }}>
            <Box sx={{ width: "100%", height: "100px", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "flex-start", justifyContent: "space-between" }}>
                <Typography variant="body1" className="tutor-paragraphe">Want someone to instruct you? No worries, here we introduce our HOOMSCHOOL’s online Tutors  to assist & guide you in your professional  Path</Typography>
                <Box>
                    <Button variant="contained" sx={{ background: "#1275EA" }}>Find A Tutor</Button>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ color: "#1275EA", py: "1em" }}>Meet Our Popular Tutors</Typography>
                <Box sx={{ width: "100%", whiteSpace: "10px" }}>
                    <Splide options={{
                        perPage: 3,
                        type: 'loop',
                        perMove: 1,
                        focus: "center",
                    }}>
                        {myTutors.map((tutor, i) => {
                            return (
                                <SplideSlide key={i}>
                                    <TutorDetaille
                                        key={i}
                                        image={tutor.image}
                                        title={tutor.title}
                                        nb_course={tutor.nb_course}
                                        review={tutor.review}
                                        nb_students={tutor.nb_students}
                                    />
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </Box>
                <Box sx={{ width: "100%", height: "300px", display: "flex", alignItems: "center", justifyContent: "end" }}>
                    <img src={plant} alt="plant" style={{ width: "150px", height: "200px", objectFit: "cover", marginTop: "-25em" }} />
                </Box>
            </Box>
        </Stack>
    );
};

export default Tutors;
