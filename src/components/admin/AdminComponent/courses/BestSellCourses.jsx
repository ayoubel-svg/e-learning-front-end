

export default function BestSellCourses() {
  return (
    <div className="text-center">
      <h5 className="text-center">Best-Selling Courses</h5>
      <div className="table-responsive">
        <table className="table table-striped mt-2 rounded overflow-hidden">
          <thead className="bg-dark text-center text-white">
            <tr>
              <th scope="col">Course</th>
              <th scope="col">Enrolled</th>
              <th scope="col">Tutor</th>
            </tr>
          </thead>
          <tbody className="text-center table-primary">
            <tr>
              <td>Python</td>
              <td>1k+</td>
              <td>Omar</td>
            </tr>
            <tr>
              <td>Java</td>
              <td>5k+</td>
              <td>Ayoub</td>
            </tr>
            <tr>
              <td>React</td>
              <td>5k+</td>
              <td>Anouar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
