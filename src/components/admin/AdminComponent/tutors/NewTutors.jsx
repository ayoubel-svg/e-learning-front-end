import { ArrowDownward, FilterAlt } from "@mui/icons-material";
import SearchBar from "../../SearchBar";


export default function NewTutors() {
  return (
    <div className="my-5">

      <div className="d-lg-flex d-block justify-content-between w-100">
        <h5 className="my-auto text-center text-lg-start">New Tutors</h5>
        <div className="d-flex gap-2">
          <div className="input-group my-auto shadow rounded">
            <span className="input-group-text px-2 bg-secondary text-white border-0" id="basic-addon1">
              <FilterAlt />
            </span>
            <select className="form-select border-0">
              <option defaultValue={"0"} >Filter</option>
            </select>
          </div>
          <SearchBar
            mobile={"none"}
            desktop={"flex"}
            width={'100'}
            placeholder={"Tutors ..."}
          />
          <SearchBar
            mobile={"flex"}
            desktop={"none"}
            width={'100'}
            placeholder={"Tutors ..."}
          />
        </div>
      </div>

      <div className="table-responsive my-3">
        <table className="table table-striped mt-4 rounded overflow-hidden">
          <thead className="bg-info bg-opacity-50 text-center">
            <tr className="">
              <th scope="col">Tutor</th>
              <th scope="col">Status</th>
              <th scope="col">Courses</th>
              <th scope="col">Ratings</th>
            </tr>
          </thead>
          <tbody className="text-center table-secondary">
            <tr>
              <td>Mark</td>
              <td>
                <small className="bg-success bg-opacity-50 rounded p-1 text-white">
                  <span className="text-dark fw-bold">verified</span>
                </small>
              </td>
              <td>0</td>
              <td>
                <small
                  className="d-flex justify-content-center mx-auto gap-1 bg-danger bg-opacity-25 rounded"
                  style={{ maxWidth: "100px" }}
                >
                  <ArrowDownward className="text-danger fs-4 " />
                  <span className="text-dark fw-bold my-auto">2.5 of 5</span>
                </small>
              </td>
            </tr>
            <tr>
              <td>john</td>
              <td>
                <small className="bg-warning bg-opacity-50 rounded p-1 text-white">
                  <span className="text-dark fw-bold">pending</span>
                </small>
              </td>
              <td className="fw-bold">-</td>
              <td>
                <small
                  className="d-flex justify-content-center mx-auto gap-1 rounded"
                  style={{ maxWidth: "100px" }}
                >
                  <span className="text-dark fw-bold my-auto">-</span>
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
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
    </div>
  );
}
