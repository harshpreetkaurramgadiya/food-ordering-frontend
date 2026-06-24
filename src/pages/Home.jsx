import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">
              🍔 Foodie App
            </span>

            <h1 className="text-6xl font-bold mt-8 leading-tight">
              Fresh &
              <span className="text-orange-500"> Delicious </span>
              Food Delivered
              <br />
              To You
            </h1>

            <p className="text-gray-500 text-lg mt-6 leading-8">
              Discover amazing dishes, add them to your cart and enjoy
              a seamless food ordering experience with Foodie.
            </p>

            <div className="flex gap-5 mt-10">

              <button
                onClick={() => navigate("/menu")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg transition"
              >
                Order Now 🍕
              </button>

              <button
                onClick={() => navigate("/menu")}
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition"
              >
                Explore Menu
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="absolute w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 -top-10 right-10"></div>

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200"
              alt="food"
              className="rounded-3xl shadow-2xl relative z-10"
            />

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Explore Categories
            </h2>

            <p className="text-gray-500 mt-2">
              Choose your favourite dishes
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <CategoryCard title="Pizza" emoji="🍕" />
          <CategoryCard title="Burger" emoji="🍔" />
          <CategoryCard title="Pasta" emoji="🍝" />
          <CategoryCard title="Dessert" emoji="🍰" />

        </div>

      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center shadow-2xl">

          <h2 className="text-5xl text-white font-bold">
            Ready To Order?
          </h2>

          <p className="text-orange-100 mt-4 text-lg">
            Browse our menu and enjoy your favourite meals.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-8 bg-white text-orange-500 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Explore Full Menu 🍽️
          </button>

        </div>

      </section>

    </div>
  );
};

export default Home;