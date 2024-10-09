import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarMiniComponent from "./Navbar/NavbarMiniComponent";
import { removeFromCart } from "../redux/cart/cartSlice";

const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.cartOfResturantApp.cartItems);
  const { currentUserOfRestaurantApp } = useSelector(
    (state) => state.userOfRestaurantApp
  );

  const [loading, setLoading] = useState(false);  
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

    const handleChangeInForm = (e) => {
      setFormData((prevData) => ({
        ...prevData, 
        [e.target.id]: e.target.value,
      }));
      console.log(formData);
    };
  // Function to place an order
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("Form Data Before Submit:", formData);
      const res = await fetch(
        `http://localhost:3000/api/order/createorder/${currentUserOfRestaurantApp._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
          withCredntials: true,
        }
      );

      const data = await res.json();
      if (res.ok) {
        setLoading(false);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  // Calculate total price
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].stock === true) {
      totalPrice += cartItems[i].price * cartItems[i].quantity;
    }
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <NavbarMiniComponent />
      <div className="p-2 md:p-4">
        <h2 className="text-xl font-bold">Your Order</h2>
        <div className="p-4 md:p-0 flex flex-col justify-start h-[150px] overflow-y-scroll items-start gap-4 bg-transparent transition-all duration-200 ">
          {cartItems.map((pizza) => (
            <div
              key={pizza._id}
              className="flex flex-col p-4 group hover:cursor-pointer md:flex-row gap-6 w-full bg-slate-100 rounded-lg h-auto md:h-auto"
            >
              <div className="img_container px-2 w-auto h-full flex items-center overflow-hidden justify-center">
                <img
                  src={pizza.image}
                  alt="Thumbnail"
                  className="mix-blend-multiply transition-all w-auto md:w-[200px] md:h-[100px] bg-white  duration-700 object-cover"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row md:px-4 items-start md:items-center justify-between gap-6">
                <div className="w-full titleAndDesc group flex flex-col gap-2 items-start justify-start">
                  <div className="titleandesc">
                    <h3>{pizza.name}</h3>
                    <p>{pizza.description}</p>
                  </div>
                  <div className=" w-11/12 quantity flex flex-row justify-between items-center gap-4">
                    <div>
                      <h3>Quantity: {pizza.quantity}</h3>
                      <p>Price: ${pizza.price * pizza.quantity}</p>
                    </div>
                    <span
                      className={`bg-primary border px-3 py-1 rounded-full text-xs font-medium ${
                        pizza.stock === true
                          ? "text-emerald-800 border-green-800"
                          : "text-red-600 border-red-600"
                      }`}
                    >
                      {pizza.stock === true ? "In Stock" : "Out Of Stock"}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleRemove(pizza.id)}
                  >
                    <box-icon type="solid" name="trash"></box-icon>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {/* <form
            onChange={handleChangeInForm}
            className="rounded-lg border bg-card text-card-htmlForeground shadow-sm w-full max-h-[100%] max-w-2xl"
            onSubmit={placeOrder} // Add onSubmit handler
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Ordered By:
              </h3>
              <div className="flex flex-row justify-start items-center pt-4 gap-4">
                <span className="relative border flex shrink-0 overflow-hidden rounded-md w-[170px] h-[175px]">
                  <img
                    src={currentUserOfRestaurantApp.profilePic}
                    alt="Photo"
                    id="profilePic"
                    className="w-full mix-blend-multiply border border-solid"
                  />
                </span>
                <div className="nameAndId flex flex-col items-start justify-start">
                  <span>
                    <strong>userId:</strong> {currentUserOfRestaurantApp._id}
                  </span>
                  <span>
                    <strong>Name:</strong> {currentUserOfRestaurantApp.username}
                  </span>
                  <span>
                    <strong>Email:</strong> {currentUserOfRestaurantApp.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 pb-4 grid gap-2">
              <span className="flex flex-row gap-2 items-center justify-start">
                <strong>Address:</strong>
                <input
                  type="text"
                  placeholder="street No 12, sandieago, NewYork"
                  className="p-3 w-full border"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} // Set address
                />
              </span>
              <span>
                <strong>Phone Number:</strong>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="p-3 w-full border"
                  value={currentUserOfRestaurantApp.phone}
                  onChange={(e) => setPhone(e.target.value)} // Set phone number
                />
              </span>
              <span>
                <strong>Payment Method:</strong>
              </span>
              <select
                name="Payment Method"
                className="w-fit p-3"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)} // Set payment method
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Gift cards" disabled>
                  Gift cards (coming soon)
                </option>
              </select>
              <span>
                <strong>Items: </strong>
                {cartItems.map((item) => (
                  <li key={item._id}>{item.name}</li>
                ))}
              </span>
              <span className="text-xl mt-4">
                <strong>Total Price:</strong> ${totalPrice}
              </span>
              {totalPrice > 0 ? (
                <button
                  type="submit"
                  className={`p-3 bg-stone-100 rounded-md hover:scale-110 duration-300 transition-all hover:tracking-wide `}
                >
                  {loading ? "Placing Order..." : "Order Now"}
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`p-3 bg-stone-100 rounded-md cursor-not-allowed text-rose-300`}
                >
                  Check your cart
                </button>
              )}
            </div>
          </form> */}
          <form
            onChange={handleChangeInForm}
            className="rounded-lg border bg-card text-card-htmlForeground shadow-sm w-full max-h-[100%] max-w-2xl"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                About Order
              </h3>
              <div className="flex pt-4 items-center gap-4">
                <span className="relative border flex shrink-0 overflow-hidden rounded-md w-[170px] h-[175px]">
                  <img
                    src={currentUserOfRestaurantApp.profilePic}
                    alt="Photo"
                    id="profilePic"
                    className="w-full mix-blend-multiply border border-solid"
                  />
                </span>
              </div>
            </div>
            <div className="p-6 pt-0 pb-4 grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    <strong>Name: </strong>
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="username"
                    readOnly
                    placeholder="Enter your name"
                    defaultValue={currentUserOfRestaurantApp.username}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    <strong>Email: </strong>
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="m@example.com"
                    type="email"
                    readOnly
                    defaultValue={currentUserOfRestaurantApp.email}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  <strong>Phone: </strong>
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="phone"
                  placeholder="(123) 456-7890"
                  type="tel"
                  readOnly
                  defaultValue={currentUserOfRestaurantApp.phone}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  <strong>Address: </strong>
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="HostAddress"
                  placeholder="Example: lekhnath-30, powerhouse, Kaski"
                  type="tel"
                  defaultValue={currentUserOfRestaurantApp.address}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 px-6 pt-1 pb-2">
              <span>
                <strong>Payment Method:</strong>
              </span>
              <select name="Payment Method" id="paymentMethod" className="w-fit p-3">
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Gift cards" disabled>
                  Gift cards (coming soon)
                </option>
              </select>
              <span>
                <strong>Items: </strong>
                {cartItems.map((item) => (
                  <li key={item._id}>{item.name}</li>
                ))}
              </span>
              <span className="text-xl mt-4">
                <strong>Total Price:</strong> ${totalPrice}
              </span>
              {totalPrice > 0 ? (
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className={`p-3 bg-stone-100 w-full mt-2 rounded-md hover:scale-110 duration-300 transition-all hover:tracking-wide `}
                >
                  {loading ? "Placing Order..." : "Order Now"}
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`p-3 bg-stone-100 w-full mt-2 rounded-md cursor-not-allowed text-rose-300`}
                >
                  Check your cart
                </button>
              )}
            </div>
            {errorMsg && (
              <p className="px-3 py-2 bg-red-600 text-white">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
