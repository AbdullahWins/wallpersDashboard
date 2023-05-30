import { useState } from "react";
import React, { useContext } from "react";
import Charts from "../../Components/Charts/Charts";
import HomeTopCard from "../../Components/Cards/HomeTopCard";
import { WallpaperContext } from "../../Contexts/WallpaperContext/WallpaperContext";

const Dashboard = () => {
  const [userType] = useState("Admin");

  const { wallpapers } = useContext(WallpaperContext);
  const data = [
    {
      title: "Total Lense Added",
      number: wallpapers?.length,
      color: "bg-infoColor",
    },
    {
      title: "Total User",
      number: wallpapers?.length,
      color: "bg-secondaryMainLight",
    },
    {
      title: "Total Artist",
      number: wallpapers?.length,
      color: "bg-primaryMainLight",
    },
    {
      title: "Total Revenue",
      number: `$${wallpapers?.length}`,
      color: "bg-successColor",
    },
  ];

  return (
    <div className="w-full overflow-auto pt-10 pb-32 pr-10">
      {(userType === "Admin" || userType === "Manager") && (
        <div className="flex flex-col justify-around pty-10 gap-4 w-full">
          {/* 4 top cards */}
          <section className="flex justify-between gap-8 px-4">
            {data.map((data, index) => (
              <HomeTopCard data={data} key={index}></HomeTopCard>
            ))}
          </section>
          <Charts></Charts>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
