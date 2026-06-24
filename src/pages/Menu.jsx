import { useState } from "react";
import FoodCard from "../components/FoodCard";

const foods = [
  {
    id: 1,
    name: "Cheese Pizza",
    price: 299,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Loaded with mozzarella cheese"
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    price: 349,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80",
    description: "Fresh veggies & cheese"
  },
  {
    id: 3,
    name: "Veg Burger",
    price: 199,
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Juicy veggie burger"
  },
  {
    id: 4,
    name: "Chicken Burger",
    price: 249,
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Crispy chicken burger"
  },
  {
    id: 5,
    name: "White Sauce Pasta",
    price: 249,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    description: "Creamy pasta"
  },
  {
    id: 6,
    name: "Chocolate Cake",
    price: 149,
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description: "Soft chocolate cake"
  }
];

const Menu = ({cart, setCart}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ FILTER
  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  // ✅ ADD TO CART (FIXED)
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-8">
        Our Menu 🍽️
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-4 flex-wrap mb-10">
        {["All", "Pizza", "Burger", "Pasta", "Dessert"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FOOD GRID */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  );
};

export default Menu;