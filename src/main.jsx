import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import Signup from "./Components/Signup/Signup";
import Product from "./Components/Products/products";
import Error from "./Components/404Error/Error404";
import Login from "./Components/Login/Login";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "./Components/cart/cart";
import PrivateRoute from "./Components/PrivateRoute";
import PlaceOrder from "./Components/PlaceOrder";
import NavbarMiniComponent from "./Components/Navbar/NavbarMiniComponent";
import Wishlists from "./Components/Wishlist/Wishlists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Product />,
    errorElement: <Error />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error />,
  },
  {
    path: "/placeorder",
    element: <PlaceOrder />,
    errorElement: <Error />,
  },
  {
    path: "/wishlist",
    element: <Wishlists />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
