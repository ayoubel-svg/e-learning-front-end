import PropTypes from 'prop-types';


export default function Course({ course }) {

  return (
    <>
      <div className="row my-3 mx-0">
        <div className="col-7 mx-auto mx-lg-0 col-lg">
          <div className="card w-auto text-center">
            <div key={course.id}>
              <div className="card-header text-center">
                <h5 className="card-title text-capitalize my-auto">{course.name}</h5>
              </div>
              <img
                src={course.image}
                style={{ height: "300px" }}
                className="card-img-top w-auto img-fluid rounded-0"
              />
              <div className="card-body d-flex flex-column" >
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <span className="card-text d-flex">Tutor
                      <span className="ms-auto fw-bold text-capitalize">
                        {course.tut}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Price
                      <span className="ms-auto fw-bold">
                        {course.price}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Enrolled
                      <span className="ms-auto fw-bold">
                        {course.enrol}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Duration
                      <span className="ms-auto fw-bold">
                        {course.duration}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <h2 className="mb-3 mt-3 mt-lg-0 p-2 text-center rounded bg-info bg-gradient shadow">Course Content</h2>
          <div className="accordion mb-5 mb-lg-0" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third accordion body.</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third accordion body.</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third accordion body.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Course.propTypes = {
  course: PropTypes.object
};
