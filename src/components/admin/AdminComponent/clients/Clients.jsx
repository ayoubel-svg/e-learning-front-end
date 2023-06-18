import { ArrowBack, DeleteForever, Search, Visibility } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import Client from "./Client";



function Clients() {

  const [srchTerm, setSearch] = useState("");
  const [data, setData] = useState();
  const [clientDetails, setClient] = useState(false);
  const [selectd, setSelected] = useState({});

  useEffect(() => {
    const fetchClients = async () => {
      const allClients = await axios.get("http://127.0.0.1:8000/api/clients", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setData(allClients.data);
    }
    fetchClients();
  }, []);

  const deleteTut = async (clientId) => {
    axios.delete(`http://127.0.0.1:8000/api/clients/${clientId}`)
      .then(() => {
        const updatedData = data.filter(tutor =>
          tutor.id !== clientId
        );
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error deleting tutor :", error);
      });
  }

  return (
    <>
      {clientDetails ?
        <>
          <Client client={selectd.client} />
          <button
            type="button"
            className="d-flex align-items-center justify-content-center gap-1
            btn btn-sm btn-secondary shadow rounded-0 rounded-top 
            fixed-bottom fw-bold ms-auto"
            style={{ width: "fit-content" }}
            onClick={() => setClient(false)}
          >
            <ArrowBack />
            CLIENTS
          </button>
        </>
        :
        <>
          <div>
            <h2
              className="text-center text-white bg-secondary bg-gradient
              rounded shadow mb-4 pb-2 pt-1 fw-bold mx-auto"
            >
              Clients
            </h2>
            <div
              className={`input-group mx-auto mx-lg-0 me-lg-auto my-lg-auto my-4 
              align-content-center shadow rounded`}
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
          </div>
          <div className="table-responsive mt-4">
            <table className="table table-striped table-hover rounded overflow-hidden text-center">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Client</th>
                  <th>City</th>
                  <th>Enrolled Courses</th>
                  <th>Date Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-primary bg-gradient">
                {srchTerm ?
                  data && data.filter(cli => cli.name.startsWith(srchTerm)).map(client => {
                    return (
                      <tr
                        key={Date.now()}
                        style={{ cursor: "pointer" }}
                      >
                        <td className="text-capitalize">{client.name}</td>
                        <td>{client.city}</td>
                        <td>10</td>
                        <td>{Date(new Date(client.created_at)).slice(0, 16)}</td>
                        <td className="d-flex gap-1 justify-content-center">
                          <button
                            className="btn btn-sm p-0 btn-success"
                            onClick={() => {
                              setClient(true);
                              setSelected({ client })
                            }}
                          >
                            <Visibility />
                          </button>
                          <button
                            className="btn btn-sm p-0 btn-danger"
                            onClick={() => deleteTut(client.id)}
                          >
                            <DeleteForever />
                          </button>
                        </td>
                      </tr>
                    )
                  })
                  :
                  data && data.map(client => {
                    return (
                      <tr
                        key={Date.now()}
                        style={{ cursor: "pointer" }}
                      >
                        <td className="text-capitalize">{client.name}</td>
                        <td>{client.city}</td>
                        <td>10</td>
                        <td>{Date(new Date(client.created_at)).slice(0, 16)}</td>
                        <td className="d-flex gap-1 justify-content-center">
                          <button
                            className="btn btn-sm p-0 btn-success"
                            onClick={() => {
                              setClient(true);
                              setSelected({ client })
                            }}
                          >
                            <Visibility />
                          </button>
                          <button
                            className="btn btn-sm p-0 btn-danger"
                            onClick={() => deleteTut(client.id)}
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
          </div>
        </>
      }
    </>
  )
}

export default Clients;