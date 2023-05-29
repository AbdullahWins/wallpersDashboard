import React from "react";
import blue from "../../../Assets/round/blue.png";
import red from "../../../Assets/round/red.png";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartLine = ({ title, data }) => {
  return (
    <div className="flex flex-col justify-between h-96">
      <section className="flex items-center justify-between">
        <p className="text-2xl text-blackMid  font-bold">{title}</p>
      </section>
      <section className="flex items-center justify-start gap-6 mb-6">
        <div className="flex items-center justify-center gap-2">
          <img src={red} alt="" />
          <p>This Year</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={blue} alt="" />
          <p>Last Year</p>
        </div>
      </section>
      <section className="overflow-x-auto overflow-y-hidden flex items-center justify-center">
        <LineChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#FC5B2B"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#37B6B6" />
        </LineChart>
      </section>
    </div>
  );
};

export default ChartLine;
