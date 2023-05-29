import React from "react";
import ChartLine from "./ChartTypes/ChartLine";
import ChartArea from "./ChartTypes/ChartArea";
import ChartBar from "./ChartTypes/ChartBar";
import HomeOrders from "../Tables/HomeOrders";

const Charts = () => {
  const data = [
    { name: "Feb", uv: 400, pv: 1100, amt: 1800 },
    { name: "Mar", uv: 200, pv: 1400, amt: 1300 },
    { name: "Apr", uv: 400, pv: 1500, amt: 1200 },
    { name: "May", uv: 100, pv: 1100, amt: 1900 },
    { name: "Jun", uv: 600, pv: 1200, amt: 1400 },
    { name: "Jul", uv: 300, pv: 1200, amt: 1900 },
    { name: "Aug", uv: 100, pv: 1700, amt: 1700 },
    { name: "Sep", uv: 800, pv: 1400, amt: 1100 },
    { name: "Oct", uv: 300, pv: 1600, amt: 1500 },
    { name: "Nov", uv: 100, pv: 1100, amt: 1700 },
    { name: "Dec", uv: 800, pv: 1400, amt: 1100 },
    { name: "Jan", uv: 200, pv: 1700, amt: 1500 },
  ];
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 p-4 items-center justify-around gap-4">
      <div className="bg-whiteHigh rounded-xl p-6">
        <HomeOrders title="Recent Wallpapers Added"></HomeOrders>
      </div>
      <div className="bg-whiteHigh rounded-xl p-6">
        <HomeOrders title="Recent RingTone Added"></HomeOrders>
      </div>
      <div className="bg-whiteHigh rounded-xl p-6">
        <ChartArea data={data} title="In-App Purchase"></ChartArea>
      </div>
      <div className="bg-whiteHigh rounded-xl p-6">
        <ChartLine data={data} title="Users"></ChartLine>
      </div>
      <div className="bg-whiteHigh rounded-xl p-6">
        <ChartLine data={data} title="Contributors"></ChartLine>
      </div>
      <div className="bg-whiteHigh rounded-xl p-6">
        <ChartBar data={data} title="Content Uploaded"></ChartBar>
      </div>
    </section>
  );
};

export default Charts;
