


// import { useEffect, useState } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         "http://localhost:5000/api/orders/my-orders",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setOrders(response.data.orders);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-5">
//       <div className="max-w-5xl mx-auto">

//         <h1 className="text-4xl font-bold mb-8 text-center">
//           📦 My Orders
//         </h1>

//         {orders.length === 0 ? (
//           <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
//             <h2 className="text-2xl font-semibold text-gray-500">
//               No Orders Yet 😔
//             </h2>
//           </div>
//         ) : (
//           <div className="space-y-8">
//             {orders.map((order) => (
//               <div
//                 key={order._id}
//                 className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
//               >
//                 {/* Top Section */}
//                 <div className="flex justify-between items-center mb-6 flex-wrap gap-3">

//                   <div>
//                     <h2 className="text-xl font-bold">
//                       Order ID
//                     </h2>

//                     <p className="text-gray-500 text-sm">
//                       {order._id}
//                     </p>
//                   </div>

//                   <div className="flex gap-3">

//                     <span
//                       className={`px-5 py-2 rounded-full text-white font-semibold ${
//                         order.isPaid
//                           ? "bg-green-500"
//                           : "bg-red-500"
//                       }`}
//                     >
//                       {order.isPaid ? "Paid ✅" : "Pending ❌"}
//                     </span>

//                     <span className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold">
//                       {order.status}
//                     </span>

//                   </div>
//                 </div>

//                 {/* Items */}
//                 <div className="space-y-4">
//                   {order.items.map((item) => (
//                     <div
//                       key={item._id}
//                       className="flex justify-between items-center border rounded-2xl p-4 bg-gray-50"
//                     >
//                       <div>
//                         <h3 className="font-bold text-lg">
//                           🍕 {item.food?.name}
//                         </h3>

//                         <p className="text-gray-500">
//                           Quantity: {item.quantity}
//                         </p>
//                       </div>

//                       <div className="text-xl font-bold text-orange-500">
//                         ₹{item.price}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Total */}
//                 <div className="mt-6 border-t pt-5 flex justify-between items-center">

//                   <h2 className="text-xl font-semibold">
//                     Total Amount
//                   </h2>

//                   <h2 className="text-3xl font-bold text-green-600">
//                     ₹{order.totalAmount}
//                   </h2>

//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;


import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/orders/my-orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelOrder = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/orders/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Order Cancelled");

      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel order");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white p-10 rounded-3xl shadow text-center">
            <h2 className="text-2xl text-gray-500">
              No Orders Yet 😔
            </h2>
          </div>
        ) : (
          <div className="space-y-8">

            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                {/* Top */}
                <div className="flex justify-between mb-6 flex-wrap gap-4">

                  <div>
                    <h2 className="font-bold text-lg">
                      Order ID
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {order._id}
                    </p>
                  </div>

                  <div>

                    {order.isPaid ? (
                      <span className="bg-green-500 text-white px-5 py-2 rounded-full">
                        Paid ✅
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white px-5 py-2 rounded-full">
                        Pending ❌
                      </span>
                    )}

                  </div>

                </div>

                {/* Items */}

                <div className="space-y-3">

                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border rounded-2xl p-4 flex justify-between"
                    >
                      <div>
                        <h3 className="font-bold text-lg">
                          🍕 {item.food}
                        </h3>

                        <p className="text-gray-500">
                          Quantity : {item.quantity}
                        </p>
                      </div>

                      <div className="text-orange-500 font-bold text-xl">
                        ₹{item.price}
                      </div>

                    </div>
                  ))}

                </div>

                {/* Bottom */}

                <div className="border-t mt-6 pt-6 flex justify-between items-center flex-wrap gap-4">

                  <div>
                    <h2 className="font-semibold text-xl">
                      Total Amount
                    </h2>

                    <h1 className="text-3xl text-green-600 font-bold">
                      ₹{order.totalAmount}
                    </h1>
                  </div>

                  {!order.isPaid && (
                    <button
                      onClick={() => cancelOrder(order._id)}
                      className="bg-red-500 text-white px-6 py-3 rounded-xl"
                    >
                      Cancel Order
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;