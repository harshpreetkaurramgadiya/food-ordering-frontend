// import Navbar from "../components/Navbar";
// import FoodCard from "../components/FoodCard";
// import CategoryCard from "../components/CategoryCard";
// import Footer from "../components/Footer";

// const foods = [
//     {
//         id: 1,
//         name: "Cheese Pizza",
//         price: 299,
//         description: "Loaded with mozzarella cheese.",
//         image:
//             "https://images.unsplash.com/photo-1513104890138-7c749659a591",
//     },
//     {
//         id: 2,
//         name: "Burger",
//         price: 199,
//         description: "Juicy burger with fresh vegetables.",
//         image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
//     },
//     {
//         id: 3,
//         name: "Pasta",
//         price: 249,
//         description: "Creamy Italian white sauce pasta.",
//         image:
//             "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
//     },
// ];

// const Home = () => {
//     return (
//         <>
//             <Navbar />

//             {/* Hero Section */}
//             <section className="max-w-7xl mx-auto px-6 py-20">
//                 <div className="grid md:grid-cols-2 gap-10 items-center">

//                     <div>
//                         <h1 className="text-5xl font-bold leading-tight">
//                             Delicious Food
//                             <span className="text-orange-500"> Delivered</span>
//                             <br />
//                             To Your Doorstep
//                         </h1>

//                         <p className="text-gray-600 mt-6 text-lg">
//                             Order your favorite meals from the best restaurants
//                             and get them delivered quickly.
//                         </p>

//                         <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
//                             Order Now
//                         </button>
//                     </div>

//                     <div>
//                         <img
//                             src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
//                             alt="food"
//                             className="rounded-2xl shadow-lg"
//                         />
//                     </div>

//                 </div>
//             </section>

//             {/* Categories */}
//             <section className="max-w-7xl mx-auto px-6 py-16">
//                 <h2 className="text-3xl font-bold mb-8">
//                     Explore Categories
//                 </h2>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//                     <CategoryCard
//                         title="Pizza"
//                         emoji="🍕"
//                     />

//                     <CategoryCard
//                         title="Burger"
//                         emoji="🍔"
//                     />

//                     <CategoryCard
//                         title="Pasta"
//                         emoji="🍝"
//                     />

//                     <CategoryCard
//                         title="Desserts"
//                         emoji="🍰"
//                     />

//                 </div>
//             </section>

//             {/* Popular Foods */}
//             <section className="max-w-7xl mx-auto px-6 py-16">
//                 <h2 className="text-3xl font-bold mb-8">
//                     Popular Foods
//                 </h2>

//                 <div className="grid md:grid-cols-3 gap-8">
//                     {foods.map((food) => (
//                         <FoodCard
//                             key={food.id}
//                             food={food}
//                         />
//                     ))}
//                 </div>
//             </section>


//             {/* Why Choose Us */}
//             <section className="bg-gray-50 py-20">
//                 <div className="max-w-7xl mx-auto px-6">

//                     <h2 className="text-4xl font-bold text-center mb-12">
//                         Why Choose Us?
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-8">

//                         <div className="bg-white p-8 rounded-2xl shadow-md text-center">
//                             <div className="text-5xl mb-4">🚀</div>

//                             <h3 className="text-xl font-bold mb-3">
//                                 Fast Delivery
//                             </h3>

//                             <p className="text-gray-600">
//                                 Get your favorite food delivered within minutes.
//                             </p>
//                         </div>

//                         <div className="bg-white p-8 rounded-2xl shadow-md text-center">
//                             <div className="text-5xl mb-4">🍔</div>

//                             <h3 className="text-xl font-bold mb-3">
//                                 Quality Food
//                             </h3>

//                             <p className="text-gray-600">
//                                 Fresh ingredients and delicious meals every day.
//                             </p>
//                         </div>

//                         <div className="bg-white p-8 rounded-2xl shadow-md text-center">
//                             <div className="text-5xl mb-4">💳</div>

//                             <h3 className="text-xl font-bold mb-3">
//                                 Secure Payments
//                             </h3>

//                             <p className="text-gray-600">
//                                 Safe and secure payment options for every order.
//                             </p>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-6">

//                     <h2 className="text-4xl font-bold text-center mb-12">
//                         What Our Customers Say
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-8">

//                         <div className="bg-white p-8 rounded-2xl shadow-md">
//                             <p className="text-gray-600">
//                                 Amazing food and super fast delivery. Highly recommended!
//                             </p>

//                             <div className="mt-6">
//                                 <h4 className="font-bold">Rahul Sharma</h4>
//                                 <p className="text-orange-500">★★★★★</p>
//                             </div>
//                         </div>

//                         <div className="bg-white p-8 rounded-2xl shadow-md">
//                             <p className="text-gray-600">
//                                 The quality of food is always excellent and fresh.
//                             </p>

//                             <div className="mt-6">
//                                 <h4 className="font-bold">Priya Verma</h4>
//                                 <p className="text-orange-500">★★★★★</p>
//                             </div>
//                         </div>

//                         <div className="bg-white p-8 rounded-2xl shadow-md">
//                             <p className="text-gray-600">
//                                 Easy ordering process and great customer service.
//                             </p>

//                             <div className="mt-6">
//                                 <h4 className="font-bold">Aman Singh</h4>
//                                 <p className="text-orange-500">★★★★★</p>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             <Footer/>
//         </>

//     );
// };

// export default Home;


// import FoodCard from "../components/FoodCard";
// import CategoryCard from "../components/CategoryCard";

// const foods = [
//   {
//     id: 1,
//     name: "Cheese Pizza",
//     price: 299,
//     description: "Loaded with mozzarella cheese.",
//     image:
//       "https://images.unsplash.com/photo-1513104890138-7c749659a591",
//   },
//   {
//     id: 2,
//     name: "Burger",
//     price: 199,
//     description: "Juicy burger with fresh vegetables.",
//     image:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
//   },
//   {
//     id: 3,
//     name: "Pasta",
//     price: 249,
//     description: "Creamy Italian white sauce pasta.",
//     image:
//       "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
//   },
// ];

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-5xl font-bold leading-tight">
//               Delicious Food
//               <span className="text-orange-500"> Delivered</span>
//               <br />
//               To Your Doorstep
//             </h1>

//             <p className="text-gray-600 mt-6 text-lg">
//               Order your favorite meals from the best restaurants and get them
//               delivered quickly.
//             </p>

//             <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
//               Order Now
//             </button>
//           </div>

//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
//               alt="food"
//               className="rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold mb-8">
//           Explore Categories
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <CategoryCard title="Pizza" emoji="🍕" />
//           <CategoryCard title="Burger" emoji="🍔" />
//           <CategoryCard title="Pasta" emoji="🍝" />
//           <CategoryCard title="Desserts" emoji="🍰" />
//         </div>
//       </section>

//       {/* Popular Foods */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold mb-8">
//           Popular Foods
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {foods.map((food) => (
//             <FoodCard
//               key={food.id}
//               food={food}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

// import { useNavigate } from "react-router-dom";
// import CategoryCard from "../components/CategoryCard";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h1 className="text-5xl font-bold leading-tight">
//               Fresh & Tasty
//               <span className="text-orange-500"> Food</span>
//               <br />
//               Anytime, Anywhere
//             </h1>

//             <p className="text-gray-600 mt-6 text-lg">
//               Discover delicious dishes, add them to your cart and enjoy
//               quick ordering with our Foodie app.
//             </p>

//             <button
//               onClick={() => navigate("/menu")}
//               className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
//             >
//               Order Now 🍽️
//             </button>
//           </div>

//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
//               alt="food"
//               className="rounded-3xl shadow-xl"
//             />
//           </div>

//         </div>
//       </section>

//       {/* Categories */}
//       <section className="max-w-7xl mx-auto px-6 py-16">

//         <h2 className="text-3xl font-bold mb-8">
//           Explore Categories
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <CategoryCard title="Pizza" emoji="🍕" />
//           <CategoryCard title="Burger" emoji="🍔" />
//           <CategoryCard title="Pasta" emoji="🍝" />
//           <CategoryCard title="Dessert" emoji="🍰" />
//         </div>

//       </section>

//       {/* Explore Menu */}
//       <section className="max-w-7xl mx-auto px-6 py-20 text-center">

//         <h2 className="text-4xl font-bold mb-4">
//           Ready to Order?
//         </h2>

//         <p className="text-gray-500 mb-8">
//           Browse our complete menu and add your favourite dishes to cart.
//         </p>

//         <button
//           onClick={() => navigate("/menu")}
//           className="bg-orange-500 text-white px-10 py-4 rounded-2xl hover:bg-orange-600 transition"
//         >
//           Explore Full Menu 🍕
//         </button>

//       </section>
//     </>
//   );
// };

// export default Home;

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