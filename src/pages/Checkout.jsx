// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Checkout = ({ cartItems, setCart }) => {
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       // Create Order
//       const orderData = {
//         items: cartItems.map((item) => ({
//           food: item.id, // IMPORTANT
//           quantity: item.quantity,
//           price: item.price,
//         })),
//         totalAmount: cartItems.reduce(
//           (sum, item) => sum + item.price * item.quantity,
//           0
//         ),
//       };

//       // Save Order in DB
//       const orderResponse = await axios.post(
//         "http://localhost:5000/api/orders/create",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Create Razorpay Payment Order
//       const paymentResponse = await axios.post(
//         "http://localhost:5000/api/payment/create",
//         {
//           orderId: orderResponse.data.order._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const options = {
//         key: "rzp_test_T4ygIes2NlzIR6",
//         amount: paymentResponse.data.paymentOrder.amount,
//         currency: "INR",
//         name: "Food Ordering App",
//         description: "Food Payment",
//         order_id: paymentResponse.data.paymentOrder.id,

//         handler: async function (response) {
//           try {
//             await axios.post(
//               "http://localhost:5000/api/payment/verify",
//               {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//                 orderId: orderResponse.data.order._id,
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               }
//             );

//             toast.success("Payment Successful 🎉");
//             setCart([]);
//             navigate("/orders");
//           } catch (error) {
//             console.log(error);
//             toast.error("Payment Verification Failed");
//           }
//         },

//         theme: {
//           color: "#f97316",
//         },
//       };

//       const razor = new window.Razorpay(options);
//       razor.open();

//     } catch (error) {
//       console.log("FULL ERROR =", error);
//       console.log("RESPONSE =", error.response?.data);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-10">
//       <h1 className="text-4xl font-bold mb-8">
//         Checkout 💳
//       </h1>

//       <div className="bg-white shadow-lg p-6 rounded-xl">

//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full border p-3 rounded mb-4"
//         />

//         <input
//           type="text"
//           placeholder="Address"
//           className="w-full border p-3 rounded mb-4"
//         />

//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="w-full border p-3 rounded mb-4"
//         />

//         <button
//           onClick={handlePayment}
//           className="bg-green-500 text-white px-6 py-3 rounded"
//         >
//           Pay Now
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Checkout;

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, MapPin, Phone, CreditCard } from "lucide-react";

const Checkout = ({ cartItems, setCart }) => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");

      const orderData = {
        items: cartItems.map((item) => ({
          food: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount: cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };

      const orderResponse = await axios.post(
        "http://localhost:5000/api/orders/create",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const paymentResponse = await axios.post(
        "http://localhost:5000/api/payment/create",
        {
          orderId: orderResponse.data.order._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const options = {
        key: "rzp_test_T4ygIes2NlzIR6",
        amount: paymentResponse.data.paymentOrder.amount,
        currency: "INR",
        name: "Food Ordering App",
        description: "Food Payment",
        order_id: paymentResponse.data.paymentOrder.id,

        handler: async function (response) {
          await axios.post(
            "http://localhost:5000/api/payment/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: orderResponse.data.order._id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success("Payment Successful 🎉");
          setCart([]);
          navigate("/orders");
        },

        theme: {
          color: "#f97316",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-100 py-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Left */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2">
            Checkout 💳
          </h1>

          <p className="text-gray-500 mb-8">
            Complete your order details
          </p>

          <div className="space-y-5">

            <div className="relative">
              <User className="absolute left-4 top-4 text-orange-500" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl pl-14 py-4 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-orange-500" />
              <input
                type="text"
                placeholder="Address"
                className="w-full border rounded-xl pl-14 py-4 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-4 text-orange-500" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-xl pl-14 py-4 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
            >
              Pay Now 🚀
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <CreditCard className="text-orange-500" />
            Order Summary
          </h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">
                    Qty : {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-orange-600">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 flex justify-between">
            <h2 className="text-2xl font-bold">
              Total
            </h2>

            <h2 className="text-3xl font-bold text-orange-500">
              ₹
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;