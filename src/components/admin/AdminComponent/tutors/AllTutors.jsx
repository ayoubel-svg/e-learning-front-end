import { ArrowBack, CheckCircleOutline, DeleteForever, Edit } from "@mui/icons-material";
import { useState } from "react";
import SearchBar from "../../SearchBar";
import Tutor from "./Tutor";

let data = [
  {
    id: "1", name: "Mark", status: "pending", courses: "150", city: "tangier"
  },
  {
    id: "2", name: "Tony", status: "pending", courses: "0", city: "tetouan"
  }
];

function AllTutors() {

  const [verified, setVerification] = useState("");
  const [tutorDetails, setTutor] = useState(false);
  const [selectd, setSelected] = useState({});
  const [arr, setArr] = useState(data);

  const verify = (tutor) => {
    const updatedArr = arr.map((t) => {
      if (t.id === tutor.id) {
        t.status = "verified";
      }
      return t;
    });
    setVerification("verified");
    setArr(updatedArr);
  };

  return (
    <>
      {
        tutorDetails ? (
          <>
            <Tutor tutor={selectd.tutor} />
            <button
              type="button"
              className="d-flex align-items-center justify-content-center gap-1
              btn btn-sm btn-secondary w-auto shadow rounded-0 rounded-top fixed-bottom"
              onClick={() => setTutor(false)}
            >
              <ArrowBack />
              Tutors
            </button>
          </>
        ) :
          <>
            <h2 className="text-center text-white bg-success 
              rounded shadow my-4 pb-2 pt-1 fw-bold mx-auto">
              Tutors
            </h2>
            <SearchBar
              mobile={"none"}
              desktop={"flex"}
              width={'50'}
              placeholder={"Tutors..."}
            />
            <SearchBar
              mobile={"flex"}
              desktop={"none"}
              width={'100'}
              placeholder={"Tutors..."}
            />
            <div className="table-responsive mt-4">
              <table className="table table-striped table-hover rounded overflow-hidden text-center">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Tutor</th>
                    <th>Status</th>
                    <th>Courses</th>
                    <th>City</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-primary">
                  {
                    arr.map((tutor) =>
                    (
                      <tr
                        key={tutor.id}
                        style={{ cursor: "pointer" }}
                      >
                        <td
                          onClick={() => {
                            setTutor(true);
                            setSelected({ tutor })
                          }}
                          className="text-capitalize"
                        >
                          {tutor.name}
                        </td>
                        <td>
                          <small
                            className={`bg-opacity-50 rounded p-1 text-white 
                              ${tutor.status === "verified" ? "bg-success" : "bg-warning"}`}
                          >
                            <span className="text-dark fw-bold">{tutor.status}</span>
                          </small>
                        </td>
                        <td>{tutor.courses}</td>
                        <td>{tutor.city}</td>
                        <td className="d-flex gap-1 justify-content-center">
                          <button className="btn btn-sm p-0 btn-success">
                            <Edit />
                          </button>
                          <button className="btn btn-sm p-0 btn-danger">
                            <DeleteForever />
                          </button>
                          <button
                            className={`btn btn-sm p-0 text-white 
                              ${tutor.status === "verified" ? "bg-success" : "bg-warning"}`}
                            onClick={() => verify(tutor)}
                          >
                            <CheckCircleOutline />
                          </button>
                        </td>
                      </tr>
                    )
                    )
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
      }
    </>
  )
}

export default AllTutors;