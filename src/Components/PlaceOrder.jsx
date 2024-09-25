// components/Cart.js

import React, { useState } from 'react';
// import axios from 'axios';

const PlaceOrder = ({ cartItems, userId }) => {
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.pizza.price * item.quantity, 0);

  // const placeOrder = async () => {
  //   setLoading(true);
  //   try {
  //     await axios.post('/api/place-order', {
  //       userId,
  //       items: cartItems.map(item => ({
  //         pizza: item.pizza._id,
  //         quantity: item.quantity,
  //       })),
  //       totalPrice,
  //     });
  //     alert('Order placed successfully');
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //     alert('Failed to place order');
  //   }
  //   setLoading(false);
  // };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.pizza._id}>
            {item.pizza.name} x {item.quantity} - ${item.pizza.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={placeOrder} disabled={loading}>
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
    </div>
  );
};

export default PlaceOrder;
