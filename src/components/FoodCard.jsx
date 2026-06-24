const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{food.name}</h2>
          <span className="text-orange-500 font-bold">
            ₹{food.price}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-2">
          {food.description}
        </p>

        <button
          onClick={() => addToCart(food)}
          className="w-full mt-4 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 "
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default FoodCard;