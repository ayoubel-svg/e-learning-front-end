import PropTypes from "prop-types";


export default function Tutor({ tutor }) {

  return (
    <div>
      <div className="row my-3 mx-0">
        <div className="col-7 mx-auto mx-lg-0 col-lg">
          <div
            className="card w-auto text-center"
          >
            <div>
              <div className="card-header text-center">
                <h5 className="card-title text-capitalize my-auto">
                  {tutor.name}
                </h5>
              </div>
              <img
                src="../admin.jpg"
                className="card-img-top img-fluid w-100 rounded-0 bg-dark"
                style={{ height: "340px" }}
              />
              <div className="card-body d-flex flex-column" >
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <span className="card-text d-flex">City
                      <span className="ms-auto fw-bold">
                        {tutor.city}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Courses
                      <span className="ms-auto fw-bold">
                        {tutor.courses}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 mb-5">
          <h2 className="mb-3 mt-3 mt-lg-0 p-2 text-center rounded bg-info bg-gradient shadow">
            Courses
          </h2>
          <div className="row g-2">
            <div className="col-6">
              <div
                className="card"
              >
                <img
                  src={"../java-logo.png"}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-capitalize">java</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title
                  </p>
                  <a className="btn btn-primary w-100">Go</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="card"
              >
                <img
                  src={"../java-logo.png"}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-capitalize">java</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title
                  </p>
                  <a className="btn btn-primary w-100">Go</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="card"
              >
                <img
                  src={"../java-logo.png"}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-capitalize">java</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title
                  </p>
                  <a className="btn btn-primary w-100">Go</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Tutor.propTypes = {
  tutor: PropTypes.object
};
