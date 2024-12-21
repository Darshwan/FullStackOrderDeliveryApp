import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { removeFromWishlist } from "../../redux/wishlist/wishlist"; // Adjust the import path as necessary
import NavbarMiniComponent from "../Navbar/NavbarMiniComponent";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(
    (state) => state.wishlistsOfResturantApp.favoriteItems
  );

  const [cartClicked, setCartClicked] = useState("");
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };
    const handleOrderNow = (item) => {
      dispatch(addToCart(item)); 
      navigate("/placeorder");
    };
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
    // Dispatch the addToCart action with the pizza details
    dispatch(addToCart(itemToAdd));
    setCartClicked(`${pizza.name} `);
    console.log(cartClicked);

    setTimeout(() => {
      setCartClicked("");
    }, 5000);
  };

  return (
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
      {wishlistItems.length > 0 ? (
        <div className="flex min-h-screen mt-6 w-full flex-col bg-muted/40">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <h1 className="text-lg font-semibold">Your Wishlist</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-4">
              {wishlistItems.map((pizza) => (
                <div
                  key={pizza.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                >
                  <div className="p-6 grid gap-4">
                    <div className="grid grid-cols-[150px_1fr_100px] items-start gap-4">
                      <img
                        src={pizza.image}
                        alt="Product Image"
                        width="full"
                        height="full"
                        className="rounded-sm object-cover"
                      />
                      <div className="grid gap-1">
                        <h3 className="text-xl">{pizza.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {pizza.description}
                        </p>
                        <p className="pt-4 text-xl">${pizza.price}</p>
                        <div className="buttons flex items-center justify-between">
                          <button
                            onClick={() => handleAddToCart(pizza)}
                            className="inline-flex w-full gap-3 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background border bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 text-slate-950 bg-white"
                          >
                            Add to Cart
                            <box-icon name="cart" type="solid"></box-icon>
                          </button>
                          {pizza.stock === true ? (
                            <button
                              onClick={() => handleOrderNow(pizza)}
                              className="w-full inline-flex items-center justify-center
                  whitespace-nowrap text-sm font-medium disabled text-orange-600
                  hover:bg-orange-200 border-orange-500 hover:text-black duration-300 border h-9
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
                      <div className="flex flex-col h-full items-center justify-center">
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemove(pizza.id)}
                        >
                          <box-icon type="solid" name="trash"></box-icon>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full p-6 flex flex-row justify-end items-end gap-4">
            <Link
              to="/products"
              className="btn flex items-center justify-center w-2/6"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col gap-3 items-center justify-center">
          Your Wishlist is Empty...
          <Link
            to="/products"
            className="btn flex items-center justify-center w-2/6"
          >
            Go to Shopping
          </Link>
        </div>
      )}
    </>
  );
}

export default Wishlist;
