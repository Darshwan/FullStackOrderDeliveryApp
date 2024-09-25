//import React from 'react'
import { Link } from "react-router-dom";
import clearCart from '../../redux/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/cart/cartSlice';
import NavbarMiniComponent from "../Navbar/NavbarMiniComponent";


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartOfResturantApp.cartItems);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  let subTotal = 0;
  for (let item of cartItems) {
    subTotal += item.price * item.quantity;
  }
  let tax = 0.13 * subTotal;
  let shipping = 0;
  subTotal !== 0 ? (shipping = 3.99) : (shipping = 0);
  let total = subTotal + shipping + tax;

  return (
    <>
      <NavbarMiniComponent />
      {cartItems.length > 0 ? (
        <div className="flex min-h-screen mt-6 w-full flex-col bg-muted/40">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <h1 className="text-lg font-semibold">Your Cart</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                >
                  <div className="p-6 grid gap-4">
                    <div className="grid grid-cols-[150px_1fr_100px] items-start gap-4">
                      <img
                        src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
                        alt="Product Image"
                        width="full"
                        height="full"
                        className="rounded-sm object-cover"
                      />
                      <div className="grid gap-1">
                        <h3 className="text-xl">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="pt-4 text-xl">${item.price}</p>
                      </div>
                      <div className="flex flex-col h-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(item.quantity !==0 ? () => handleUpdateQuantity(item.id, item.quantity - 1) : 0)}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
                          >
                            <box-icon name="minus"></box-icon>
                          </button>
                          <span className="sr-only">Decrease Quantity</span>
                          <span className="text-start text-xl">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
                          >
                            <box-icon name="plus"></box-icon>
                          </button>
                          <span className="sr-only">Increase Quantity</span>
                        </div>
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemove(item.id)}
                        >
                          <box-icon type="solid" name="trash"></box-icon>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 lg:col-span-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 grid gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Subtotal</p>
                    <p className="text-sm font-medium">${subTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Shipping</p>
                    <p className="text-sm font-medium">${shipping}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Tax(13%)</p>
                    <p className="text-sm font-medium">${tax.toFixed(2)}</p>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full my-2"
                  ></div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">Total</p>
                    <p className="text-lg font-semibold">${total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center p-6"></div>
              </div>
            </div>
          </div>

          <div className="w-full p-6 Buttons flex flex-row justify-end items-end gap-4">
            <button className="btn flex items-center justify-center w-2/6">
              Buy Now: ${total.toFixed(4)}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col gap-3 items-center justify-center">
          Your Cart is Empty...
          <Link to='/products' className="btn flex items-center justify-center w-2/6">
            Go to Shopping
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
