import React from "react";
import blue from "../../../Assets/round/blue.png";
import red from "../../../Assets/round/red.png";
import {
  CartesianGrid,
  XAxis,
  Tooltip,
  Area,
  ComposedChart,
  Line,
} from "recharts";

const ChartArea = ({ title, data }) => {
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
        <ComposedChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" fill="#FC5B2B" stroke="#FC5B2B" />
          <Line type="monotone" dataKey="pv" stroke="#00AE5B" />
        </ComposedChart>
      </section>
    </div>
  );
};

export default ChartArea;
