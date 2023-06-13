

export default function BestSellCourses() {
  return (
    <div className="my-4 text-center">
      <h5 className="text-center">Best-Selling Courses</h5>
      <div className="table-responsive">
        <table className="table table-striped mt-3 rounded overflow-hidden">
          <thead className="bg-secondary text-center text-white">
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
              <td>Mark</td>
            </tr>
            <tr>
              <td>Java</td>
              <td>5k+</td>
              <td>Bob</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
