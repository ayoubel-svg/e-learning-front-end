import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { days, months } from '../../../Data';
import axios from 'axios';


function CoursesSales() {

  const [data, setCourses] = useState();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/courses/');
      if (response.status === 200) {
        setCourses(response.data);
      };
    }
    fetchCourses();
  }, []);

  const [dataMonth, setData] = useState(months[new Date().getMonth()]);
  const monthly = data && data.data.filter(course => months[course.updated_at.getMonth()] === dataMonth);

  return (
    <>
      <div className='d-flex flex-column'>
        <select
          key={Date.now()}
          value={dataMonth}
          className='form-select w-auto me-auto my-3'
          onChange={(e) => setData(e.target.value)}
        >
          {
            months.map((month, index) => {
              return (
                <>
                  <option key={index}>
                    {dataMonth === month ? dataMonth : month}
                  </option>
                </>
              )
            })
          }
        </select>
        <div
          key={Date.now()}
          style={{ width: '100%', height: "400px" }}
        >
          <ResponsiveContainer>
            <AreaChart
              width={800}
              height={400}
              data={monthly}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={"date"}
                tickCount={4}
                tickFormatter={(tickItem) => tickItem.getDate()}
              >
                <Label
                  offset={0}
                  position="insideBottom"
                />
              </XAxis>
              <YAxis />
              <Tooltip
                labelFormatter={(label) => {
                  return days[new Date(label).getDay()] + ", " + new Date(label).getDate();
                }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default CoursesSales;