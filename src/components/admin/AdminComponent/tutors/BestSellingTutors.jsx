

function BestSellingTutors() {
  return (
    <div className="my-4 text-center">
      <h5 className="text-center">Best-Selling Tutors</h5>
      <div className="table-responsive">
        <table className="table table-striped mt-3 rounded overflow-hidden">
          <thead className="bg-secondary text-center text-white">
            <tr>
              <th scope="col">Tutor</th>
              <th scope="col">Sales</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody className="text-center table-primary">
            <tr>
              <td>Mark</td>
              <td>1k+</td>
              <td>DH15000</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>5k+</td>
              <td>DH37000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BestSellingTutors;