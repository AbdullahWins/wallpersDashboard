import React, { useContext } from "react";
import { OrderContext } from "../../Contexts/OrdersContext/OrdersProvider";
// import OrdersLoading from "../Shared/LoadingScreens/OrdersLoading";
import { lense } from "../../Assets/getImages";

const HomeOrders = ({ title }) => {
  const { orders, isLoading } = useContext(OrderContext);
  return (
    <section>
      <div className="flex flex-col h-96">
        <section className="flex items-center justify-between mb-6">
          <p className="text-2xl text-blackMid font-bold">{title}</p>
        </section>
        <div className="overflow-x-auto overflow-y-auto max-h-80">
          {isLoading ? (
            // <OrdersLoading></OrdersLoading>
            ""
          ) : (
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-primaryMain py-6 text-whiteHigh normal-case">
                    Lense
                  </th>
                  <th className="bg-primaryMain py-6 text-whiteHigh normal-case">
                    Created
                  </th>
                  <th className="bg-primaryMain py-6 text-whiteHigh normal-case">
                    Artist
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, i) => {
                  return (
                    <tr key={i}>
                      <th>
                        <img src={lense} alt="" className="w-8 h-8" />
                      </th>
                      <td>{order?.timestamp?.toDate().toLocaleDateString()}</td>
                      <td>{order?.sender_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeOrders;
