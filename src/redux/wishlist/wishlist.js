import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const favoriteItemsSlice = createSlice({
  name: 'wishlistOfResturantApp',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.favoriteItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.favoriteItems.push(item);
      }
      localStorage.setItem('wishlistOfResturantApp', JSON.stringify(state.favoriteItems));
    },
    removeFromWishlist: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
      // Save updated state to localStorage
      localStorage.setItem('wishlistOfResturantApp', JSON.stringify(state.favoriteItems));
    },
    clearWishlist: (state) => {
      state.favoriteItems = [];
      // Clear cart from localStorage
      localStorage.removeItem('wishlistOfResturantApp');
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  favoriteItemsSlice.actions;

export default favoriteItemsSlice.reducer;
