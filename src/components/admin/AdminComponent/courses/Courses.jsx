import { ArrowBack, DeleteForever, Search, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";


export default function Courses() {

  const [courseDetails, setCourse] = useState(false);
  const [selectd, setSelected] = useState({});
  const [srchTerm, setSearch] = useState('');
  const [data, setData] = useState();
  const [tutors, setTutors] = useState();

  useEffect(() => {
    const fetchTutors = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/tutors/');
      if (response.status === 200) {
        setTutors(response);
      };
    }
    fetchTutors();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/courses/');
      if (response.status === 200) {
        setData(response);
      };
    }
    fetchCourses();
  }, []);

  const deleteTut = async (courseId) => {
    axios.delete(`http://127.0.0.1:8000/api/courses/${courseId}`)
      .then(() => {
        const updatedData = data.data.filter(course =>
          course.id !== courseId
        );
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error deleting tutor :", error);
      });
  }

  return (
    <div className="container-fluid">
      {
        courseDetails === true ? (
          <>
            <Course course={selectd.course} tutors={tutors} />
            <button
              type="button"
              className="d-flex align-items-center justify-content-center gap-1
              btn btn-sm btn-secondary shadow rounded-0 rounded-top 
              fixed-bottom fw-bold ms-auto"
              onClick={() => setCourse(false)}
              style={{ width: "fit-content" }}
            >
              <ArrowBack />
              Courses
            </button>
          </>
        ) : (
          <>
            <h2
              className="text-center text-white bg-primary rounded shadow 
              mb-4 pb-2 pt-1 fw-bold mx-auto"
            >
              Courses
            </h2>
            <div
              className="input-group mx-auto mx-lg-0 me-lg-auto my-lg-auto 
              my-4 align-content-center shadow rounded"
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
                placeholder={`Courses...`}
              />
            </div>
            <div className="table-responsive mt-4">
              <table className="table table-striped table-hover rounded overflow-hidden text-center">
                <thead className="bg-secondary bg-gradient text-white">
                  <tr>
                    <th>Course</th>
                    <th>Tutor</th>
                    <th>Enrolled</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Language</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-primary">
                  {srchTerm ?
                    data && data.data && data.data
                      .filter(course => course.title.startsWith(srchTerm))
                      .map(course => {
                        return (
                          <tr
                            key={course.id}
                            style={{ cursor: "pointer" }}
                          >
                            <td
                              className="text-capitalize"
                            >
                              {course.title}
                            </td>
                            <td className="text-capitalize">
                              {
                                tutors && Object.values(tutors.data)
                                  .filter(tutor => tutor.user.id === course.user_id)
                                  .map(tutor => tutor.user.name)
                              }
                            </td>
                            <td>{course.enrolled}</td>
                            <td>{course.Duration}</td>
                            <td>{course.Price}</td>
                            <td>{course.language}</td>
                            <td className="d-flex gap-1 justify-content-center">
                              <button
                                className="btn btn-sm p-0 btn-success"
                                onClick={() => {
                                  setCourse(true);
                                  setSelected({ ...selectd, course })
                                }}
                              >
                                <Visibility />
                              </button>
                              <button
                                className="btn btn-sm p-0 btn-danger"
                                onClick={() => deleteTut(course.id)}
                              >
                                <DeleteForever />
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    :
                    data && data.data && data.data.map(course => {
                      return (
                        <tr
                          key={course.id}
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="text-capitalize"
                          >
                            {course.title}
                          </td>
                          <td className="text-capitalize">
                            {
                              tutors && Object.values(tutors.data)
                                .filter(tutor => tutor.user.id === course.user_id)
                                .map(tutor => tutor.user.name)
                            }
                          </td>
                          <td>{course.enrolled}</td>
                          <td>{course.Duration}h</td>
                          <td>{course.Price} Dh</td>
                          <td>{course.language}</td>
                          <td className="d-flex gap-1 justify-content-center">
                            <button
                              className="btn btn-sm p-0 btn-success"
                              onClick={() => {
                                setCourse(true);
                                setSelected({ ...selectd, course })
                              }}
                            >
                              <Visibility />
                            </button>
                            <button
                              className="btn btn-sm p-0 btn-danger"
                              onClick={() => deleteTut(course.id)}
                            >
                              <DeleteForever />
                            </button>
                          </td>
                        </tr>
                      )
                    })
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
        )
      }
    </div>
  )
}
