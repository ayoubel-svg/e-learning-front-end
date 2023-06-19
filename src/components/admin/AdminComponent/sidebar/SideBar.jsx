import PropTypes from 'prop-types';
import "./sidebar.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function SideBar({ activeNav, selected }) {

  const navigate = useNavigate();
  const win = window.sessionStorage;

  async function logout() {
    win.removeItem("token");
    win.removeItem("role");
    win.removeItem("name");
    win.removeItem("email");
    win.removeItem("password");
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      navigate('/');
      console.log(res.data);
    } catch (err) { }
  }

  return (
    <>
      <ul className="nav flex-column gap-4">
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold 
            ${activeNav === "dashboard" ? "bg-info" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => selected("dashboard")}
        >
          <DashboardIcon />
          Dashboard
        </li>
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold 
            ${activeNav === "courses" ? "bg-info" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => selected("courses")}
        >
          <SchoolIcon />
          Courses
        </li>
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold 
            ${activeNav === "tutors" ? "bg-info" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => selected("tutors")}
        >
          <HowToRegIcon />
          Tutors
        </li>
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold 
            ${activeNav === "clients" ? "bg-info" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => selected("clients")}
        >
          <PeopleAltIcon />
          Clients
        </li>
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold 
            ${activeNav === "analytics" ? "bg-info" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => selected("analytics")}
        >
          <AnalyticsIcon />
          Analytics
        </li>
        <hr />
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold ${activeNav === "profile" ? "bg-info" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => selected("profile")}
        >
          <AccountCircleIcon />
          Profile
        </li>
        <li
          className={`nav-item w-100 d-flex gap-1 rounded p-1 fw-bold text-danger`}
          style={{ cursor: "pointer" }}
          onClick={logout}
        >
          <LogoutIcon />
          Logout
        </li>
      </ul>
    </>
  )
}

SideBar.propTypes = {
  activeNav: PropTypes.string,
  selected: PropTypes.func
};
