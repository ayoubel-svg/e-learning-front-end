import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { cities } from "./Data";
import { useNavigate } from "react-router-dom";


function Profile() {

  const session = window.sessionStorage;

  const [prf_image, setImage] = useState(null);
  const [values, setValues] = useState({
    name: session.getItem("name"),
    email: session.getItem("email"),
    password: session.getItem("password"),
    city: session.getItem('city')
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      navigate('/');
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
  }

  const success = () => {
    toast.success("Account Updated", {
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
      "Somthing Went Wrong !!",
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

  const submitUpdate = async (e) => {
    e.preventDefault();
    try {

      const { password, ...updatedValues } = values;

      if (!password) {
        delete updatedValues.password;
      }

      if (prf_image !== null) {
        updatedValues["image"] = prf_image;
      }

      const request = await axios.patch(
        `http://127.0.0.1:8000/api/update/${session.getItem("email")}`,
        updatedValues
      );

      if (request.status === 200) {
        // session.removeItem("token");
        // session.removeItem('name');
        // session.removeItem('email');
        // session.removeItem('password');
        // session.removeItem('city');

        session.setItem("token", request.data.data.token);
        session.setItem('name', request.data.data.user.name);
        session.setItem('email', request.data.data.user.email);
        session.setItem('password', request.data.data.user.password);
        session.setItem('city', request.data.data.user.city);
        success();
      } else {
        error();
      }
    } catch (err) {
      console.error(err);
      error();
    }
  }

  return (
    <div className="my-3 mx-2 w-auto">
      <h4 className="text-center text-white bg-dark rounded p-2 mb-5 w-50 mx-auto">Profile</h4>
      <div className="mx-auto w-auto text-center container">
        <form
          onSubmit={submitUpdate}
          encType="multipart/form-data"
        >
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control text-capitalize"
                  id="floating"
                  placeholder="Full Name"
                />
                <label htmlFor="floating">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  id="floatingInput"
                  className="form-control"
                  placeholder="Email address"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
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
                  {
                    cities.map((city, index) => {
                      return (
                        <option key={index}>
                          {session.getItem('city') === city ? session.getItem('city') : city}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <hr className="d-lg-none d-block" />
            <div className="col-12 col-lg mb-3 mb-lg-0">
              <img
                src={`http://127.0.0.1:8000/images/${session.getItem('image')}`}
                alt="pic"
                className="w-auto img-fluid rounded-circle mb-1 mt-auto bg-light"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="input-group d-flex flex-column">
                <label htmlFor="inputFile" className="form-label">Change Picture</label>
                <input
                  type="file"
                  name="image"
                  id="inputFile"
                  className="form-control w-100 rounded"
                  onChange={handleImage}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">Update</button>
        </form>
      </div>
      <ToastContainer className="text-center py-0" />
    </div>
  )
}

export default Profile; 