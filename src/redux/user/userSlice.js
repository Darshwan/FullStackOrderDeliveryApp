import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userOfRestaurantApp',
    initialState: {
      currentUserOfRestaurantApp: null,
      error: null,
      loading: false
    },
    reducers: {
      signInStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      signInSuccess: (state, action) => {
        state.currentUserOfRestaurantApp = action.payload;
        state.error = null;
        state.loading = false;
      },
      signInFailure: (state, action) => {
        state.currentUserOfRestaurantApp = null;
        state.error = action.payload;
        state.loading = false;
      },
      signoutSuccess: (state)=>{
          state.currentUserOfRestaurantApp = null;
          state.error = null;
          state.loading= false;
      },
      updateStart: (state) => {
          state.loading = true;
          state.error = null
      },
      updateSuccess: (state, action) => {
          state.currentUserOfRestaurantApp = action.payload;
          state.loading = false;
          state.error = null
      },
      updateFailure: (state, action) => {
          state.loading = false,
          state.error = action.payload
      },

    }
  });

export const { signInStart, signInSuccess, signInFailure,signoutSuccess, updateStart, updateSuccess, updateFailure } = userSlice.actions;
export default userSlice.reducer;