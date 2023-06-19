import PropTypes from "prop-types";


export default function Client({ client }) {

  return (
    <div>
      <div className="row my-3 mx-0">
        <div className="col-7 col-lg mx-auto mx-lg-0">
          <div
            className="card w-auto text-center"
          >
            <div>
              <div className="card-header text-center">
                <h5 className="card-title text-capitalize my-auto">
                  {client.name}
                </h5>
              </div>
              <img
                src={`http://localhost:8000/images/${client.image}`}
                className="card-img-top img-fluid rounded-circle"
                alt="pic"
                style={{ width: "250px", height: '250px' }}
              />
              <div className="card-body d-flex flex-column" >
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <span className="card-text d-flex">Email
                      <span className="ms-auto fw-bold">
                        {client.email}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">City
                      <span className="ms-auto fw-bold">
                        {client.city}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Count
                      <span className="ms-auto fw-bold">
                        {/* {tutor.courses} */} 10
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 mb-5">
          <h2 className="mb-3 mt-3 mt-lg-0 pb-1 text-center rounded bg-info bg-gradient shadow">
            Enrolled Courses
          </h2>
          <div className="row g-2">
            <div className="col-6">
              <div
                className="card mb-3 w-auto"
              >
                <div className="row g-0 w-auto">
                  <div className="col-4 my-auto">
                    <img
                      alt="crs"
                      src={"../java-logo.png"}
                      className="img-fluid rounded-start my-auto"
                    />
                  </div>
                  <div class="col">
                    <div className="card-body">
                      <h5 className="card-title text-center text-capitalize">java</h5>
                      <small className="card-text p-0 w-100">
                        Some quick example text
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="card mb-3 w-auto"
              >
                <div className="row g-0 w-auto">
                  <div className="col-4 my-auto">
                    <img
                      alt="crs"
                      src={"../Python.png"}
                      className="img-fluid rounded-start my-auto"
                    />
                  </div>
                  <div class="col">
                    <div className="card-body">
                      <h5 className="card-title text-center text-capitalize">python</h5>
                      <small className="card-text p-0 w-100">
                        Some quick example text
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

Client.propTypes = {
  client: PropTypes.object
};
