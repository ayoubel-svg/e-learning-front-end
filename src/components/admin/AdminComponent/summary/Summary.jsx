import axios from "axios";
import { useEffect, useState } from "react";

function Summary() {

  const [tutors, setData] = useState();

  useEffect(() => {
    const fetchTutors = async () => {
      const allTutors = await axios.get("http://127.0.0.1:8000/api/tutors", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setData(allTutors);
    }
    fetchTutors();
  }, []);


  return (
    <div className="m-auto">
      <h5 className="text-center">Summary</h5>
      <div className="row my-4">
        <div className="col-12 col-lg mb-2">
          <div className="card bg-primary bg-gradient">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="card-title">30000</h5>
              <h6
                className="card-subtitle ps-1 text-white text-end"
                style={{ color: "black" }}
              >Sold Courses</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg mb-2">
          <div className="card bg-primary bg-gradient">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="card-title">
                {tutors && tutors && Object.values(tutors.data).length}
              </h5>
              <h6
                className="card-subtitle ps-1 text-white text-end"
                style={{ color: "black" }}
              >Tutors</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg mb-2">
          <div className="card bg-primary bg-gradient">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="card-title">20000 DH</h5>
              <h6
                className="card-subtitle ps-1 text-white text-end"
                style={{ color: "black" }}
              >of Revenue</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Summary