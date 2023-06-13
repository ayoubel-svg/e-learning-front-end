import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const data = [
  {
    sales: 10,
    date: new Date("2023-06-01")
  },
  {
    sales: 30,
    date: new Date("2023-06-09")
  },
  {
    sales: 20,
    date: new Date("2023-06-19")
  },
  {
    sales: 40,
    date: new Date("2023-06-30")
  },
  {
    sales: 15,
    date: new Date("2023-05-01")
  },
  {
    sales: 3,
    date: new Date("2023-05-09")
  },
  {
    sales: 10,
    date: new Date("2023-05-19")
  },
  {
    sales: 30,
    date: new Date("2023-05-30")
  },
];


function CoursesSales() {

  const [dataMonth, setData] = useState(months[new Date().getMonth()]);
  const monthly = data.filter(sale => months[sale.date.getMonth()] === dataMonth);

  return (
    <>
      <div className='d-flex flex-column'>
        <select
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
        <div style={{ width: '100%', height: "400px" }}>
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
      </div >
    </>
  );
}

export default CoursesSales;