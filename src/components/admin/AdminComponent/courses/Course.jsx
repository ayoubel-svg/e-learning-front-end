import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


export default function Course({ course, tutors }) {

  // const [videos, setVideos] = useState();
  // useEffect(() => {
  //   const getVids = async () => {
  //     const response = await axios.get(`http://localhost:8000/api/video/`,{
  //       headers:{
  //         Authorization:`Bearer ${window.sessionStorage.getItem('token')}`
  //       }
  //     })
  //     setVideos(response)
  //   }
  //   getVids()
  // }, [])

  // console.log(videos && videos);
  return (
    <>
      <div className="row my-3 mx-0">
        <div className="col-7 mx-auto mx-lg-0 col-lg">
          <div className="card w-auto text-center my-auto">
            <div key={course.id}>
              <div className="card-header text-center">
                <h5 className="card-title text-capitalize my-auto">{course.title}</h5>
              </div>
              <img
                alt='crs'
                src={`http://127.0.0.1:8000/images/${course.image}`}
                style={{ height: "250px" }}
                className="card-img-top w-auto img-fluid rounded-0"
              />
              <div className="card-body d-flex flex-column" >
                <ul className="list-group text-start">
                  <li className="list-group-item">
                    <span className="card-text d-flex">Tutor
                      <span className="ms-auto fw-bold text-capitalize">
                        {
                          tutors && Object.values(tutors.data)
                            .filter(tutor => tutor.user.id === course.user_id)
                            .map(tutor => tutor.user.name)
                        }
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Price
                      <span className="ms-auto fw-bold">
                        {course.Price}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Enrolled
                      <span className="ms-auto fw-bold">
                        {course.enrolled}
                      </span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="card-text d-flex">Duration
                      <span className="ms-auto fw-bold">
                        {course.Duration}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <h2 className="mb-3 mt-3 mt-lg-0 pb-1 text-center rounded bg-info bg-gradient shadow">
            Course Content</h2
          >
          <div
            className="accordion mb-5 mb-lg-0"
            id="accordionExample"
          >
            {/* {
              videos && videos.data.data.filter(vid => vid.cours_id === course.id).map(vid => {
                return (
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        vid.name
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third accordion body.</strong>
                      </div>
                    </div>
                  </div>
                )
              })
            } */}

            {/* <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third accordion body.</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third accordion body.</strong>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

Course.propTypes = {
  course: PropTypes.object
};
