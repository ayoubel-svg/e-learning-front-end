/* eslint-disable no-unused-vars */
import { ArrowBack, CheckCircleOutline, DeleteForever, Edit, FilterAlt, Search, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Tutor from "./Tutor";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


function AllTutors() {

  const [tutorDetails, setTutor] = useState(false);
  const [selectd, setSelected] = useState({});
  const [data, setData] = useState();
  const [srchTerm, setSearch] = useState('');

  useEffect(() => {
    const fetchTutors = async () => {
      const allTutors = await axios.get("http://127.0.0.1:8000/api/tutors", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setData(allTutors);
    }
    fetchTutors();
  }, []);

  const success = () => {
    toast.success("Account Deleted", {
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
      "Somthing went wrong!!",
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

  const deleteTut = async (tut) => {
    axios.delete(`http://127.0.0.1:8000/api/tutors/${tut.user.id}`)
      .then(() => {
        const updatedData = Object.values(data.data).filter(tutor =>
          tutor.user.id !== tut.user.id
        );
        success();
        setData(updatedData);
      })
      .catch((error) => {
        error();
        console.error("Error deleting tutor :", error);
      });
  }

  return (
    <>
      {tutorDetails ? (
        <>
          <Tutor tutor={selectd.tutor} />
          <button
            type="button"
            className="d-flex align-items-center justify-content-center gap-1
            btn btn-sm btn-secondary shadow rounded-0 rounded-top 
            fixed-bottom fw-bold ms-auto"
            style={{ width: "fit-content" }}
            onClick={() => setTutor(false)}
          >
            <ArrowBack />
            TUTORS
          </button>
        </>
      ) :
        <>
          <h2 className="text-center text-white bg-dark 
              rounded shadow mb-4 pb-2 pt-1 fw-bold mx-auto">
            Tutors
          </h2>
          <div className="d-flex gap-2">
            <div
              className="input-group mx-auto mx-lg-0 me-lg-auto my-lg-auto my-4 
              align-content-center shadow rounded"
              style={{ width: "400px" }}
            >
              <span
                className="input-group-text px-2 bg-secondary text-white border-0"
                id="basic-addon1"
              >
                <Search />
              </span>
              <input
                type="search"
                value={srchTerm}
                onChange={e => setSearch(e.target.value)}
                className="form-control border-0"
                placeholder={`Tutors...`}
              />
            </div>
          </div>
          <div className="table-responsive mt-4">
            <table
              className="table table-striped table-hover rounded overflow-hidden text-center"
            >
              <thead className="bg-primary text-white">
                <tr>
                  <th>Tutor</th>
                  <th>City</th>
                  <th>Courses</th>
                  <th>Date Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-secondary">
                {srchTerm ?
                  data && data.data && Object.values(data.data)
                    .filter(tutor => tutor.user.name.startsWith(srchTerm))
                    .map((tutor) => (
                      <tr
                        key={tutor.user.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setTutor(true);
                          setSelected({ tutor })
                        }}
                      >
                        <td
                          className="text-capitalize"
                        >
                          {tutor.user.name}
                        </td>
                        <td>{tutor.user.city}</td>
                        <td>{tutor.courses.length}</td>
                        <td>{Date(new Date(tutor.user.created_at)).slice(0, 16)}</td>
                        <td className="d-flex gap-1 justify-content-center">
                          <button
                            className="btn btn-sm p-0 btn-success"
                            onClick={() => {
                              setTutor(true);
                              setSelected({ tutor })
                            }}
                          >
                            <Visibility />
                          </button>
                          <button
                            className="btn btn-sm p-0 btn-danger"
                            onClick={() => deleteTut(tutor.user.id)}
                          >
                            <DeleteForever />
                          </button>
                        </td>
                      </tr>
                    ))
                  :
                  data && data.data && Object.values(data.data).map((tutor) => (
                    <tr
                      key={tutor.user.id}
                      style={{ cursor: "pointer" }}
                    >
                      <td
                        className="text-capitalize"
                      >
                        {tutor.user.name}
                      </td>
                      <td>{tutor.user.city}</td>
                      <td>{tutor.courses.length}</td>
                      <td>{Date(new Date(tutor.user.created_at)).slice(0, 16)}</td>
                      <td className="d-flex gap-1 justify-content-center">
                        <button
                          className="btn btn-sm p-0 btn-success"
                          onClick={() => {
                            setTutor(true);
                            setSelected({ tutor })
                          }}
                        >
                          <Visibility />
                        </button>
                        <button
                          className="btn btn-sm p-0 btn-danger"
                          onClick={() => deleteTut(tutor)}
                        >
                          <DeleteForever />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="/">1</a></li>
              <li className="page-item"><a className="page-link" href="/">2</a></li>
              <li className="page-item"><a className="page-link" href="/">3</a></li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </>
      }
      <ToastContainer />
    </>
  )
}

export default AllTutors;