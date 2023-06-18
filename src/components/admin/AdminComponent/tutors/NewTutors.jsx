import axios from "axios";
import { useEffect, useState } from "react";


export default function NewTutors() {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchTutors = async () => {
      const newTutors = await axios.get("http://127.0.0.1:8000/api/tutors", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setData(newTutors);
    }
    fetchTutors();
  }, []);

  return (
    <div className="m-auto">
      <h5 className="my-auto text-center mt-5">New Tutors</h5>
      <div className="table-responsive mb-1">
        <table className="table table-striped mt-3 rounded overflow-hidden">
          <thead className="bg-dark text-center text-white">
            <tr className="">
              <th>Tutor</th>
              <th>City</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody className="text-center table-secondary">
            {data && Object.values(data.data) && Object.values(data.data).map(tutor => {
              return (
                <tr
                  key={tutor.user.id}
                >
                  <td className="text-capitalize">{tutor.user.name}</td>
                  <td>
                    {tutor.user.city}
                  </td>
                  <td>{Date(new Date(tutor.user.created_at)).slice(0, 16)}</td>
                </tr>
              )
            }).slice(0, 3)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
