import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add_user } from "../Slices/UserInfo";

import login from "../assets/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorComponent from "./ErrorComponent";

function Login() {

  const [checkbox, setBg] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [newError, setNewError] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const win = window.sessionStorage;

  useEffect(() => {
    if (win.getItem('token')) {
      navigate('/');
    }
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  const error = () => {
    toast.error(
      "Somthing went wrong please re fill the fields",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (values.email !== "" && values.password !== "") {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/login",
          values,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(
          add_user({
            token: res.data.data.token,
            name: res.data.data.user.name,
            email: res.data.data.user.email,
            password: res.data.data.user.password,
            city: res.data.data.user.city,
            image: res.data.data.user.image
          })
        );
        win.setItem("token", res.data.data.token);
        win.setItem("name", res.data.data.user.name);
        win.setItem("email", res.data.data.user.email);
        win.setItem("password", res.data.data.user.password);
        win.setItem("city", res.data.data.user.city);
        win.setItem("image", res.data.data.user.image);
        win.setItem("role", res.data.data.user.role);
        res.status === 200 && navigate("/");
      } catch (err) {
        setNewError(err)
        console.log(err)
      }
    } else {

      error();
    }
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="m-auto d-flex rounded shadow bg-primary">
        <div className="bg-primary p-5 w-auto rounded align-self-center">
          <form onSubmit={handleSubmit}>
            {newError && <ErrorComponent error={newError} />}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email</label>
              {isEmpty && (
                <div style={{ color: "red" }}>Email Field Required</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                id="floatingPassword"
                placeholder="Password"
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
              {isEmpty && (
                <div style={{ color: "red" }}>Email Field Required</div>
              )}
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex mx-auto gap-2 pe-2 mb-1 form-check form-switch">
                <input
                  type="checkbox"
                  id="remember"
                  className={`form-check-input my-auto ${checkbox ? "bg-dark" : ""
                    }`}
                  role="switch"
                  onChange={(e) => setBg(e.target.checked)}
                />
                <label htmlFor="remember" className="text-white">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-dark fw-bold w-100 btn-outline-light my-2"
              >
                Login
              </button>
              <Link
                to={"/register"}
                className="w-100 text-white text-center text-underline fw-bold"
              >
                <u>
                  <i className="text-uppercase">create account here</i>
                </u>
              </Link>
            </div>
          </form>
        </div>
        <div
          className="bg-dark p-5 d-none d-lg-flex justify-content-center align-items-center"
          style={{
            borderTopLeftRadius: "50px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "7px",
            borderTopRightRadius: "7px",
            height: "80vh",
          }}
        >
          <img
            src={[login]}
            className="img-fluid"
            style={{ width: "90%", height: "90%" }}
            alt="pic"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
