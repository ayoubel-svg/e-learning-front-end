import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "../styles/navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";



const NavBar = () => {

  const [isLoged, setIsloged] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const user = useSelector((state) => state.user.userInfo);
  const win = window.sessionStorage;

  useEffect(() => {
    const isAuth = win.getItem("token");
    isAuth && setIsloged(true);
    const role = win.getItem("role");
    role === "1" && setIsAdmin(true);
  }, [user.token, user.name, win]);

  async function logout() {
    setIsAdmin(false);
    setIsloged(false);
    win.removeItem("token");
    win.removeItem("role");
    win.removeItem("name");
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
      console.log(res.data);
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light w-100 shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          H<span className="glasses">OO</span>MSCHOOL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navBar"
          aria-controls="navBar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" id="navBar">
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/" className="nav-link">
                Courses
              </Link>
              <Link to="/" className="nav-link">
                Tutors
              </Link>
              <Link
                to="/instractor"
                className="nav-link"
                style={{ display: isLoged ? "" : "none" }}
              >
                Instractor
              </Link>
              <Link
                to="/admin"
                className="nav-link"
                style={{ display: isAdmin ? "" : "none" }}
              >
                Admin Dashboard
              </Link>
            </ul>
            <ul className="navbar-nav d-flex align-items-center gap-2">
              <Link
                to={"/login"}
                className="me-auto nav-link w-100"
                style={{ display: isLoged ? "none" : "block" }}
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="me-auto nav-link w-100"
                style={{ display: isLoged ? "none" : "block" }}
              >
                Register
              </Link>
              <div
                className="box-2 d-none d-lg-block"
                style={{ display: isLoged ? "block" : "none", cursor: "pointer" }}
              >
                {isLoged && <ShoppingCartIcon className="shoping-cart" />}
              </div>
              <div
                className="box-2 d-block d-lg-none nav-link me-auto"
                style={{ display: isLoged ? "block" : "none", cursor: "pointer" }}
              >
                Cart
              </div>
              <div
                className={`nav-item rounded shadow px-1 justify-content-center w-100 bg-white
                ${isLoged ? "d-flex" : "d-none"}`}
                style={{ cursor: "pointer" }}
              >
                <div className="dropdown d-none d-lg-block my-auto">
                  <button
                    className="btn btn-sm btn-white dropdown-toggle d-flex align-items-center
									  text-capitalize text-black border-0"
                    type="button" data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >{window.sessionStorage.getItem('name')}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <span
                        className={`dropdown-item fw-bold d-flex gap-1`}
                        style={{ cursor: "pointer" }}
                      >
                        <SettingsIcon />
                        Settings
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={logout}
                        className="dropdown-item fw-bold d-flex gap-1"
                      >
                        <LogoutIcon /> Logout
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
