import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, setCart }) => {

  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          Your cart is empty
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white shadow rounded-xl"
              >

                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">

                  <h2 className="font-bold">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                  <p className="text-orange-500 mt-3 font-bold">
                    ₹{item.price * item.quantity}
                  </p>

                </div>
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="p-6 bg-white shadow rounded-xl h-fit">

            <h2 className="text-xl font-bold mb-4">
              Summary
            </h2>

            <p className="mb-4 font-semibold">
              Total: ₹{total}
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-orange-500 text-white py-2 rounded"
            >
              Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;