import { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "../../../../utilities/RenderChart";
import axios from "axios";



function ClientsSales() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchTutors = async () => {
      const allTutors = await axios.get("http://127.0.0.1:8000/api/clients", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const clientsByCity = {};
      allTutors.data.forEach(tutor => {
        const { city, id } = tutor;
        if (city in clientsByCity) {
          clientsByCity[city].ids.push(id);
          clientsByCity[city].sum = Object.values(clientsByCity[city])[1].length;
        } else {
          clientsByCity[city] = {
            city,
            ids: [id],
            sum: 1
          };
        }
      });
      const combinedData = Object.values(clientsByCity);
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

export default ClientsSales;