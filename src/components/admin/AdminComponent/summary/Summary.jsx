
function Summary() {
  return (
    <div className="mt-4">
      <h5 className="text-center mb-4">The Last 30 Days</h5>
      <div className="row">
        <div className="col-12 col-lg mb-2">
          <div className="card bg-success bg-gradient">
            <div className="card-body">
              <h5 className="card-title">30000</h5>
              <h6
                className="card-subtitle ps-1 text-white"
                style={{ color: "black" }}
              >Sold Courses</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg mb-2">
          <div className="card bg-success bg-gradient">
            <div className="card-body">
              <h5 className="card-title">250</h5>
              <h6
                className="card-subtitle ps-1 text-white"
                style={{ color: "black" }}
              >New Tutors</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg mb-2">
          <div className="card bg-success bg-gradient">
            <div className="card-body">
              <h5 className="card-title">20000 DH</h5>
              <h6
                className="card-subtitle ps-1 text-white"
                style={{ color: "black" }}
              >Of Revenue</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary