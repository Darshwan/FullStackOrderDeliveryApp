import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
};

const favoriteItemsSlice = createSlice({
  name: "wishlistOfRestaurantApp",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.favoriteItems.find((i) => i.id === item.id);

      if (!existingItem) {
        state.favoriteItems.push(item);
        localStorage.setItem(
          "wishlistOfRestaurantApp",
          JSON.stringify(state.favoriteItems)
        );
      }
    },
    removeFromWishlist: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "wishlistOfRestaurantApp",
        JSON.stringify(state.favoriteItems)
      );
    },
    clearWishlist: (state) => {
      state.favoriteItems = [];
      localStorage.removeItem("wishlistOfRestaurantApp");
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  favoriteItemsSlice.actions;

export default favoriteItemsSlice.reducer;
