import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import "./styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes";
import CourseDetaile from "./components/CourseDetaile";
import Instractor from "./components/Instractor";
import Admin from "./components/admin/Admin"
import Profile from "./components/Profile";
import CourseVideos from "./components/CourseVideos";
import About from "./components/About";
import AllCourses from "./components/AllCourses";
const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  const shouldRenderNavBar = !isAdminRoute;
  return (
    <React.Fragment>
      {shouldRenderNavBar && <NavBar />}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/instractor" element={<Instractor />} />
          <Route path="/coursevideos" element={<CourseVideos />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/allCourses" element={<AllCourses />} />
        </Route>
        <Route path="courseDetaile" element={<CourseDetaile />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      {shouldRenderNavBar && <Footer />}
    </React.Fragment>
  );
};

export default App;
