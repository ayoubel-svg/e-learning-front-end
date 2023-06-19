import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

import "../styles/navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const NavBar = () => {

  const [isLoged, setIsloged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState(window.sessionStorage.getItem("name"));
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userInfo);
  const win = window.sessionStorage;

  useEffect(() => {
    const isAuth = win.getItem("token");
    isAuth && setIsloged(true);
    const role = win.getItem("role");
    role === "1" && setIsAdmin(true);
  }, [user.token, user.name, win]);

  const isInstructor = async () => {
    const result = await Swal.fire({
      title: 'Do you want to become an instructor?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    });

    if (result.isConfirmed) {
      try {
        await axios.patch(`http://127.0.0.1:8000/api/update_role/${win.getItem('email')}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        win.setItem('role', "2");
        Swal.fire('Done', '', 'success');
        navigate("/instractor")
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'An error occurred', 'error');
      }
    } else if (result.isDenied) {
      Swal.fire('Not done', '', 'error');
    }
  }

  setInterval(() => {
    setUsername(win.getItem("name"));
  }, 2000);

  async function logout() {
    setIsAdmin(false);
    setIsloged(false);
    win.removeItem("token");
    win.removeItem("role");
    win.removeItem("name");
    win.removeItem("email");
    win.removeItem("password");
    win.removeItem("city");
    win.removeItem("image");
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
      navigate('/login');
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
          <div className="offcanvas-header py-auto">
            <button
              type="button"
              className="btn-close ms-auto rounded-circle p-2 bg-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/allCourses" className="nav-link">
                Courses
              </Link>
              <Link
                to="/instractor"
                className="nav-link btn btn-sm  btn-primary 
                text-white border-0 my-auto ms-lg-2 ms-0"
                style={{ display: isLoged && win.getItem('role') === "2" ? "block" : "none" }}
              >
                Instructor Dashboard
              </Link>
              <li
                className={`nav-link btn btn-sm w-auto px-auto rounded 
                ${isLoged && win.getItem('role') === "0" ?
                    "d-lg-flex" : "d-none"}`
                }
                style={{ cursor: "pointer" }}
                onClick={() => isInstructor()}
              >
                Become Instructor
              </li>
              <Link
                to="/admin"
                className="nav-link btn btn-sm btn-primary btn-outline-dark 
                text-white border-0 my-auto ms-lg-2 ms-0"
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
                className={`box-2 ${isLoged ? "d-none d-lg-block" : "d-none"}`}
                style={{ cursor: "pointer" }}
              >
                <ShoppingCartIcon className="shoping-cart" />
              </div>
              <div
                className="box-2 d-block d-lg-none nav-link me-auto"
                style={{ display: isLoged ? "block" : "none", cursor: "pointer" }}
              >
                Cart
              </div>
              <div
                className={`nav-item rounded shadow justify-content-center
                me-auto me-lg-0 w-100 ${isLoged ? "d-block" : "d-none"}`}
                style={{ cursor: "pointer", outline: "none" }}
              >
                <div className="dropdown-center">
                  <button
                    className="btn btn-dark dropdown-toggle text-capitalize rounded
                    border-0 w-100 text-center fw-bold d-flex align-items-center gap-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {username}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end border-0 bg-info px-0">
                    {win.getItem('role') === "1" ? 
                    (<li
                      className="dropdown-item fw-bold d-flex gap-1"
                      style={{ cursor: "pointer" }}
                      onClick={logout}
                    >
                      <LogoutIcon /> Logout
                    </li>)
                      :
                      <Link
                        to={'/profile'}
                        className="dropdown-item fw-bold d-flex gap-1 w-100"
                        style={{ cursor: "pointer" }}
                      >
                        <AccountCircleIcon />
                        Profile
                      </Link>
                    }

                    <li
                      className="dropdown-item fw-bold d-flex gap-1"
                      style={{ cursor: "pointer" }}
                      onClick={logout}
                    >
                      <LogoutIcon /> Logout
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
