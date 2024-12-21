/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlist/wishlist";
import NavbarMiniComponent from "../Navbar/NavbarMiniComponent";
import { useNavigate } from "react-router-dom";

function Pizzas() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartClicked, setCartClicked] = useState("");
  const [heartClicked, setheartClicked] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState("");

const wishlistItems = useSelector(
  (state) => state.wishlistsOfResturantApp.favoriteItems
); 
const isInWishlist = (pizzaId) => {
  return wishlistItems.some((item) => item.id === pizzaId);
};
  // Fetching the pizzas from the database
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/products/pizzas"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (error) return <p>Error: {error}</p>;
console.log(wishlistItems);

  // Function to handle adding items to the cart
  const handleAddToCart = (pizza) => {
    const itemToAdd = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      image: pizza.image,
      description: pizza.description,
      stock: pizza.stock,
      quantity: 1,
    };
    // Dispatch the addToCart action with the item details
    dispatch(addToCart(itemToAdd));
    setCartClicked(`${pizza.name} `);
    console.log(cartClicked);

    setTimeout(() => {
      setCartClicked("");
    }, 5000);
  };
  const handleWishlistToggle = (pizza) => {
    if (isInWishlist(pizza.id)) {
      dispatch(removeFromWishlist(pizza.id));
      setheartClicked(false);
      setWishlistMessage(`${pizza.name} has been removed from wishlist.`);
      setTimeout(() => {
        setWishlistMessage("");
        setheartClicked(false);
      }, 3000)
    } else {
      dispatch(addToWishlist(pizza));
      setheartClicked(true);
      setWishlistMessage(`${pizza.name} has been added to your wishlist.`);
      setTimeout(() => {
        setWishlistMessage("");
        setheartClicked(false);
      }, 3000);
    }
  };
  const handleOrderNow = (pizza) => {
    navigate("/placeorder", { state: { pizza } });
  };
  return (
    <>
      {loading ? (
        <Skeleton count={35} baseColor="#FF7417" highlightColor="#DBA520" />
      ) : (
        <>
          <NavbarMiniComponent />
          {cartClicked && (
            <div
              className="w-[300px] border-black z-999 duration-700 shadow-lg fixed top-30 right-0 text-start mb-4 p-4 bg-green-100 text-green-800 rounded-lg"
              style={{ zIndex: 9999 }}
            >
              <p>
                {" "}
                <strong>{cartClicked}</strong> has been added to the cart!{" "}
                <Link to="/cart" className="underline">
                  CheckOut
                </Link>
              </p>
            </div>
          )}
          {heartClicked && (
            <div
              className={
                heartClicked
                  ? "block fixed top-20 right-0 p-4 bg-pink-100 text-pink-800 rounded-lg shadow-lg"
                  : "hidden"
              }
              style={{ zIndex: 9999 }}
            >
              <p className={heartClicked ? "block" : "hidden"}>
                <strong>{wishlistMessage} </strong>
              </p>
            </div>
          )}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 py-12">
            {pizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl hover:translate-y-[-5px] duration-500"
              >
                <div className="relative ">
                  <img
                    src={pizza.image}
                    alt={pizza.image}
                    width="300"
                    height="200"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bg-white top-2 rounded-lg right-2">
                    <button
                      onClick={() => handleWishlistToggle(pizza)}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 bg-card text-card-foreground hover:bg-muted"
                    >
                      <box-icon
                        name="heart"
                        color={isInWishlist(pizza.id) ? "red" : "grey"}
                        type={isInWishlist(pizza.id) ? "solid" : "regular"}
                      ></box-icon>

                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-orange-600">
                      {pizza.name}
                    </h3>
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
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-1">
                    {pizza.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      {pizza.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(pizza)}
                        className="inline-flex gap-3 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background border bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 text-slate-950 bg-white"
                      >
                        Add to Cart
                        <box-icon name="cart" type="solid"></box-icon>
                      </button>
                    </div>
                  </div>

                  {pizza.stock === true ? (
                    <button
                      onClick={() => handleOrderNow(pizza)}
                      className="mt-2 w-full inline-flex items-center justify-center
                  whitespace-nowrap text-sm font-medium disabled text-orange-600
                  hover:bg-orange-200 hover:text-black duration-300 border h-9
                  rounded-md px-3"
                    >
                      Order Now
                    </button>
                  ) : (
                    <button
                      className="mt-2 w-full inline-flex cursor-not-allowed items-center justify-center
                  whitespace-nowrap text-sm font-medium disabled text-orange-600
                  hover:bg-orange-200 hover:text-black duration-300 border h-9
                  rounded-md px-3"
                    >
                      Order Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default Pizzas;
