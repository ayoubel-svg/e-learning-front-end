import { ArrowBack, DeleteForever, Edit } from "@mui/icons-material";
import { useState } from "react";
import Course from "./Course";
import SearchBar from "../../SearchBar";


let arr = [
  {
    id: "1", name: "python tutorial", tut: "mark", enrol: "150",
    duration: "3h", price: "$2500", date: "2023/01/25", image: "../Python.png"
  },
  {
    id: "2", name: "java tutorial", tut: "tony", enrol: "300",
    duration: "4h30min", price: "$3500", date: "2022/01/25", image: "../java-logo.png"
  }
]

export default function Courses() {

  const [courseDetails, setCourse] = useState(false);
  const [selectd, setSelected] = useState({});

  return (
    <div className="container-fluid">
      {
        courseDetails === true ? (
          <>
            <Course course={selectd.course} />
            <button
              type="button"
              className="d-flex align-items-center justify-content-center gap-1
              btn btn-sm btn-secondary w-auto shadow rounded-0 rounded-top fixed-bottom"
              onClick={() => setCourse(false)}
            >
              <ArrowBack />
              Courses
            </button>
          </>
        ) : (
          <>
            <h2 className="text-center text-white bg-primary rounded shadow my-4 pb-2 pt-1 fw-bold mx-auto">Courses</h2>
            <SearchBar
              mobile={"none"}
              desktop={"flex"}
              width={'50'}
              placeholder={"Courses..."}
            />
            <SearchBar
              mobile={"flex"}
              desktop={"none"}
              width={'100'}
              placeholder={"Courses..."}
            />
            <div className="table-responsive mt-4">
              <table className="table table-striped table-hover rounded overflow-hidden text-center">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Course</th>
                    <th>Tutor</th>
                    <th>Enrolled</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-primary">
                  {
                    arr.map(course => {
                      return (
                        <tr
                          key={course.id}
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            onClick={() => {
                              setCourse(true);
                              setSelected({ ...selectd, course })
                            }}
                            className="text-capitalize"
                          >
                            {course.name}
                          </td>
                          <td className="text-capitalize">{course.tut}</td>
                          <td>{course.enrol}</td>
                          <td>{course.duration}</td>
                          <td>{course.price}</td>
                          <td>{course.date}</td>
                          <td className="d-flex gap-1 justify-content-center">
                            <button className="btn btn-sm p-0 btn-success">
                              <Edit />
                            </button>
                            <button className="btn btn-sm p-0 btn-danger">
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
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
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
