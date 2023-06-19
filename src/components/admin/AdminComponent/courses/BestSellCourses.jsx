import axios from "axios";
import { useEffect, useState } from "react";


export default function BestSellCourses() {

  const [data, setData] = useState();
  const [tutors, setTutors] = useState();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/courses/');
      if (response.status === 200) {
        setData(response);
      };
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchTutors = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/tutors/');
      if (response.status === 200) {
        setTutors(response);
      };
    }
    fetchTutors();
  }, []);

  const enrolledData = data && data.data && data.data
    .sort((a, b) => b.enrolled - a.enrolled)
    .slice(0, 3);

  return (
    <div className="text-center">
      <h5 className="text-center">Top Courses</h5>
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
            {
              enrolledData && enrolledData.map(course => {
                return (
                  <tr
                    key={course.id}
                    style={{ cursor: "pointer" }}
                  >
                    <td
                      className="text-capitalize"
                    >
                      {course.title}
                    </td>
                    <td>{course.enrolled}</td>
                    <td className="text-capitalize">
                      {
                        tutors && Object.values(tutors.data)
                          .filter(tutor => tutor.user.id === course.user_id)
                          .map(tutor => tutor.user.name)
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
