// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";

// import MainLayout from "./layouts/MainLayout";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Menu from "./pages/Menu";
// import Checkout from "./pages/Checkout";

// function App() {
//   const [cart, setCart] = useState([]);
//   const [orders, setOrders] = useState([]);

//   const token = localStorage.getItem("token");

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>

//           {/* Home */}
//           <Route
//             index
//             element={token ? <Home /> : <Navigate to="/register" />}
//           />

//           {/* Register */}
//           <Route
//             path="register"
//             element={token ? <Navigate to="/" /> : <Register />}
//           />

//           {/* Login */}
//           <Route
//             path="login"
//             element={token ? <Navigate to="/" /> : <Login />}
//           />

//           {/* Menu */}
//           <Route
//             path="menu"
//             element={
//               token ? (
//                 <Menu cart={cart} setCart={setCart} />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

//           {/* Cart */}
//           <Route
//             path="cart"
//             element={
//               token ? (
//                 <Cart cartItems={cart} setCart={setCart} />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

//           {/* Checkout */}
//           <Route
//             path="checkout"
//             element={
//               token ? (
//                 <Checkout
//                   cartItems={cart}
//                   setCart={setCart}
//                   orders={orders}
//                   setOrders={setOrders}
//                 />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

//           {/* Orders */}
//           <Route
//             path="orders"
//             element={
//               token ? (
//                 <Orders orders={orders} />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        {/* Without Navbar */}
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />

        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />

        {/* With Navbar */}
        <Route path="/" element={<MainLayout />}>

          <Route
            index
            element={token ? <Home /> : <Navigate to="/register" />}
          />

          <Route
            path="menu"
            element={
              token ? (
                <Menu cart={cart} setCart={setCart} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="cart"
            element={
              token ? (
                <Cart cartItems={cart} setCart={setCart} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="checkout"
            element={
              token ? (
                <Checkout
                  cartItems={cart}
                  setCart={setCart}
                  orders={orders}
                  setOrders={setOrders}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="orders"
            element={
              token ? (
                <Orders orders={orders} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;