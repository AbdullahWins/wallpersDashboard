import { useState } from "react";
import React, { useContext } from "react";
import { OrderContext } from "../../Contexts/OrdersContext/OrdersProvider";
import { CustomerContext } from "../../Contexts/CustomerContext/CustomerProvider";
import { DeliveryContext } from "../../Contexts/DeliveryContext/DeliveryProvider";
import Charts from "../../Components/Charts/Charts";
import HomeTopCard from "../../Components/Cards/HomeTopCard";

const Home = () => {
  const [userType] = useState("Admin");

  const { orders, deliveredOrderCount } = useContext(OrderContext);
  const { riders } = useContext(DeliveryContext);
  const { customers } = useContext(CustomerContext);
  const data = [
    {
      title: "Total Lense Added",
      number: orders?.length,
      color: "bg-infoColor",
    },
    {
      title: "Total User",
      number: deliveredOrderCount,
      color: "bg-secondaryMainLight",
    },
    {
      title: "Total Artist",
      number: customers?.length,
      color: "bg-primaryMainLight",
    },
    {
      title: "Total Revenue",
      number: riders?.length,
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

export default Home;
