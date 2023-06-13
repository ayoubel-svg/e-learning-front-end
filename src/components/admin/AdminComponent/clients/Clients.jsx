import { DeleteForever, Edit } from "@mui/icons-material";
import SearchBar from "../../SearchBar";



function Clients() {
  return (
    <>
      <div>
        <h2
          className="text-center text-white bg-secondary 
          rounded shadow my-4 pb-2 pt-1 fw-bold mx-auto"
        >
          Clients
        </h2>
        <SearchBar
          mobile={"none"}
          desktop={"flex"}
          width={'50'}
          placeholder={"Clients..."}
        />
        <SearchBar
          mobile={"flex"}
          desktop={"none"}
          width={'100'}
          placeholder={"Clients..."}
        />
      </div>
      <div className="table-responsive mt-2">
        <table className="table table-striped table-hover rounded overflow-hidden text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th>Client</th>
              <th>Enrolled Courses</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-success">
            <tr style={{ cursor: "pointer" }}>
              <td>Mark</td>
              <td>10</td>
              <td>2022-12-25</td>
              <td className="d-flex gap-1 justify-content-center">
                <button className="btn btn-sm p-0 btn-success">
                  <Edit />
                </button>
                <button className="btn btn-sm p-0 btn-danger">
                  <DeleteForever />
                </button>
              </td>
            </tr>
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

export default Clients;