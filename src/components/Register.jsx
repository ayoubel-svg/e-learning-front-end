import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import signup from "../assets/signup.svg";
import { cities } from "./Data";


function Register() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    city: ""
  });

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      navigate('/');
    }
  });

  const success = () => {
    toast.success("Account Created", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton: false
    });
  };
  const error = () => {
    toast.error(
      "Somthing went wrong !!",
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        closeButton: false
      }
    );
  };

  let timeout;

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.city !== ""
    ) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          values,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        if (response.status === 200) {
          success();
          setValues({
            name: "",
            email: "",
            password: "",
            city: ""
          });
          timeout = setTimeout(() => {
            navigate("/login");
          }, 2200);
        }
      } catch (err) {
        console.log(`Error => ${err.message}`);
      }
    } else {
      error();
    }
  }

  clearTimeout(timeout);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="m-auto d-flex rounded shadow bg-dark">
        <div
          className="bg-primary p-5 d-none d-lg-flex justify-content-center align-items-center"
          style={{
            borderTopLeftRadius: "7px",
            borderBottomLeftRadius: "7px",
            borderBottomRightRadius: "50px",
            borderTopRightRadius: "50px",
            height: "auto",
          }}
        >
          <img
            src={signup}
            style={{ width: "90%", height: "90%" }}
            className="img-fluid"
            alt="signup_pic"
          />
        </div>
        <div className="bg-dark p-5 w-auto rounded align-self-center">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={values.name}
              />
              <label htmlFor="floatingPassword">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
                value={values.email}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-group mb-3">
              <select
                name="city"
                className="form-select"
                onChange={handleChange}
                value={values.city}
              >
                <option defaultValue={"0"}>City</option>
                {
                  cities.map((city, index) => {
                    return (
                      <option key={index}>
                        {city}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: /[a-z]+/.test(values.password) ?
                    "greenyellow" : "lightgrey",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
                At least one lowercase letter
              </span>
              <span
                style={{
                  color: /[A-Z]+/.test(values.password) ? 
                  "greenyellow" : "lightgrey",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
                At least one uppercase letter
              </span>
              <span
                style={{
                  color: /[0-9]+/.test(values.password) ? 
                  "greenyellow" : "lightgrey",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
                At least one number
              </span>
              <span
                style={{
                  color: /[^\w\s]/.test(values.password) ? 
                  "greenyellow" : "lightgrey",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
                At least one special caracters
              </span>
              <span
                style={{
                  color: values.password.length > 8 ? 
                  "greenyellow" : "lightgrey",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon style={{ fontSize: "1em" }} />
                At least 8 caracters
              </span>
            </div>
            <div className="d-flex flex-column">
              <button
                type="submit"
                className="btn btn-primary w-100 btn-outline-light my-2 fw-bold"
              >
                Register
              </button>
              <Link
                to={"/login"}
                className="w-100 text-white text-center text-underline fw-bold"
              >
                <u>
                  <i className="text-uppercase">Already a member? Login</i>
                </u>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
