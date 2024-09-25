import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartOfResturantApp',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
      localStorage.setItem('cartOfResturantApp', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      // Save updated state to localStorage
      localStorage.setItem('cartOfResturantApp', JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
      // Save updated state to localStorage
      localStorage.setItem('cartOfResturantApp', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      // Clear cart from localStorage
      localStorage.removeItem('cartOfResturantApp');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
