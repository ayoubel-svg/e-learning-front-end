import React from "react";
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
        </Route>
        <Route path="courseDetaile" element={<CourseDetaile />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      {shouldRenderNavBar && <Footer />}
    </React.Fragment>
  );
};

export default App;
