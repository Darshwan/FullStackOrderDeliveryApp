import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUserOfRestaurantApp } = useSelector(
    (state) => state.userOfRestaurantApp
  );

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/order/getorders/${currentUserOfRestaurantApp._id}`,
          {
            method: "GET",
            credentials: "include", // Send cookies with request
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
        console.log(orders);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [currentUserOfRestaurantApp._id]);

  return (
    // <div>
    //   <h2>Your Orders</h2>
    //   {orders.length > 0 ? (
    //     <ul>
    //       {orders.map((order) => (
    //         <li key={order._id}>
    //           <h4>Order ID: {order._id}</h4>
    //           <p>Total Price: ${order.totalPrice}</p>
    //           <p>Order Status: {order.orderStatus}</p>
    //           {/* You can map through items */}
    //           <ul>
    //             {order.items.map((item) => (
    //               <li key={item._id}>
    //                 {item.name} - {item.quantity}
    //               </li>
    //             ))}
    //           </ul>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No orders found</p>
    //   )}
    // </div>
    <div className="mt-5">
      <div className="title">
        <div className="flex flex-row items-start">
          <h2>Order ID: Order_id</h2>
          <span className="paymentStatus"></span>
        </div>
        <div>
          <span>Data of order.</span>
        </div>
      </div>
      <div className="orderItem">
        <div className="w-[400px] border h-fit">
          <span className="title">Order Item</span>
          <div className="orderCard flex flex-row ">
            <div className="leftSide">
              <img src="" alt="" />
            </div>
            <div className="rightSide">
              <span className="border p-3">[Quantity] x $[Price]</span>
              <span className="border p-3">$[totalPrice]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
