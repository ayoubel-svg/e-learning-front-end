import { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "../../../../utilities/RenderChart";
import axios from "axios";



function TutorsSales() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchTutors = async () => {
      const allTutors = await axios.get("http://127.0.0.1:8000/api/tutors", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const tutorsByCity = {};
      Object.values(allTutors.data).forEach(tutor => {
        const { city, id } = tutor.user;
        if (city in tutorsByCity) {
          tutorsByCity[city].ids.push(id);
          tutorsByCity[city].sum = Object.values(tutorsByCity[city])[1].length;
        } else {
          tutorsByCity[city] = {
            city,
            ids: [id],
            sum: 1
          };
        }
      });
      const combinedData = Object.values(tutorsByCity);
      setData(combinedData);
    }
    fetchTutors();
  }, []);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="sum"
              onMouseEnter={handleMouseEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default TutorsSales;