import PropTypes from "prop-types";


export default function Tutor({ tutor }) {

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
                  {tutor.user.name}
                </h5>
              </div>
              <div className="card-body d-flex flex-column" >
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <span className="card-text d-flex">Email
                      <span className="ms-auto fw-bold">
                        {tutor.user.email}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">City
                      <span className="ms-auto fw-bold">
                        {tutor.user.city}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Course Count
                      <span className="ms-auto fw-bold">
                        {tutor.courses.length}
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
            Added Courses
          </h2>
          <div className="row g-2">
            <h3 className="text-center fw-bold">{tutor.courses.length === 0 && "No courses yet"}</h3>
            {tutor.courses.map(course => {
              return (
                <div className="col-6">
                  <div
                    className="card mb-3 w-auto"
                  >
                    <div className="row g-0 w-auto">
                      <div className="col-4 my-auto">
                        <img
                          alt="crs"
                          src={`http://127.0.0.1:8000/images/${course.image}`}
                          className="img-fluid rounded-start my-auto border.1 border-end"
                        />
                      </div>
                      <div class="col">
                        <div className="card-body">
                          <h5 className="card-title text-center text-capitalize">{course.title}</h5>
                          <small className="card-text p-0 w-100">
                            {course.description}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }
            {/* <div className="col-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </div >
  );
}

Tutor.propTypes = {
  tutor: PropTypes.object
};
