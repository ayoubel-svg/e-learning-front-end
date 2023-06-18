

function BestSellingTutors() {
  return (
    <div className="text-center">
      <h5 className="text-center">Best-Selling Tutors</h5>
      <div className="table-responsive">
        <table className="table table-striped mt-2 rounded overflow-hidden">
          <thead className="bg-dark text-center text-white">
            <tr>
              <th scope="col">Tutor</th>
              <th scope="col">Sales</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody className="text-center table-primary">
            <tr>
              <td>Ayoub</td>
              <td>5k+</td>
              <td>DH37000</td>
            </tr>
            <tr>
              <td>Omar</td>
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