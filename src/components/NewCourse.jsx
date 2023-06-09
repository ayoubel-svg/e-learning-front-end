import React, { useEffect, useState } from "react";
import "../styles/newCours.css";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { nanoid } from "@reduxjs/toolkit";
import ErrorComponent from "./ErrorComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewCourse = () => {
  const [values, setValues] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    duration: 0,
    language: "",
    image: "",
    "videos": []
  });
  const [newMainTitle, setNewMainTitle] = useState([])
  const [newSubTitle, setNewSubTitle] = useState([])
  const [newError, setError] = useState("")
  const [counter, setCounter] = useState(1)
  const theError = () => {
    toast.error("error occurd", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const success = () => {
    toast.success("the course is been register", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "videos") {
      let copy = { ...values };
      copy.videos.push(...files);
      setValues({ ...copy });
    } else if (name === "image") {
      setValues({ ...values, image: files[0] })
    } else {
      setValues({ ...values, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token")
    const formData = new FormData()
    const formData2 = new FormData()

    try {
      formData.append("title", values.title)
      formData.append("category", values.category)
      formData.append("image", values.image)
      formData.append("description", values.description)
      formData.append("price", values.price)
      formData.append("duration", values.duration)
      formData.append("language", values.language)
      const response = await axios.post("http://127.0.0.1:8000/api/cour", formData, {
        headers: {
          Accept: "application/json",
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      values.videos.forEach((video) => {
        formData2.append("videos[]", video);
      });
      response.status === 201 && success()
      // const config = {
      //   maxContentLength: 50 * 1024 * 1024, // 50MB (adjust the value as needed)
      // };
      // const reponse2 = await axios.post("http://127.0.0.1:8000/api/video", formData2, {
      //   headers: {
      //     Accept: "application/json",
      //     'Content-Type': 'multipart/form-data',
      //     Authorization: `Bearer ${token}`
      //   }
      // }, config)

      setValues({
        title: "",
        category: "",
        description: "",
        price: 0,
        duration: 0,
        language: "",
        image: "",
        "videos": []
      })
    } catch (error) {
      setError(error)
      theError()
      console.log(error)
    }
  }

  return (
    <form
      encType="multipart/form-data"
      className="form-container"
      onSubmit={handleSubmit}
    >
      {newError && <ErrorComponent error={newError} color="red" />}
      <div className="box1">
        <div className="part1">
          <label htmlFor="title">
            Title <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title *"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className="part2">
          <label htmlFor="category">
            Category <span style={{ color: "red" }}>*</span>
          </label>
          <select name="category" id="category" onChange={handleChange}>
            <option disabled selected={values.language === "" ? true : false}>
              Choose Course Category
            </option>
            <option value="web developement">Web Developement</option>
            <option value="design">design</option>
          </select>
        </div>
      </div>
      <div className="box2">
        <label htmlFor="description">
          Description <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          name="description"
          id="description"
          cols="100"
          rows="5"
          placeholder="Description *"
          value={values.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="box3">
        <div className="part1">
          <label htmlFor="price">
            Price <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="price"
            value={values.price}
            id="price"
            placeholder="Price *"
            onChange={handleChange}
          />
        </div>
        <div className="part2">
          <label htmlFor="duration">
            Duration <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            id="duration"
            value={values.duration}
            name="duration"
            placeholder="Duration *"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="box4">
        <div className="part1">
          <label htmlFor="language">
            Cours Language <span style={{ color: "red" }}>*</span>
          </label>
          <select name="language" id="language" onChange={handleChange}>
            <option selected={values.language === "" ? true : false} disabled >Choose Language</option>
            <option value="english">English</option>
            <option value="arabic">Arabic</option>
            <option value="francais">Francais</option>
          </select>
        </div>
        <div className="part2">
          <label htmlFor="image">
            Course Thumbnail <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            placeholder="Thumbnail *"
            className="image-input"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="box5">
        <label htmlFor="video">
          Cours Videos <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="file"
          name="videos"
          id="video"
          placeholder="Videos *"
          multiple
          className="video-input"
          onChange={handleChange}
        />
      </div>
      <button className="publish">Publish</button>
      <ToastContainer />
    </form>
  );
};

export default NewCourse;
