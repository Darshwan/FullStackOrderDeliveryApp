import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import cartReducer from './cart/cartSlice'
import WishlistsReducer from "./wishlist/wishlist";
// import persistStore from 'redux-persist/es/persistStore'

const rootReducer = combineReducers({
  userOfRestaurantApp: userReducer,
  cartOfResturantApp: cartReducer,
  wishlistsOfResturantApp: WishlistsReducer
})

const persistConfig={
  key: 'root',
  storage,
  version: 1
}
  const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getdefaultMiddleware) => 
    getdefaultMiddleware({serializableCheck: false}),
})

export const persistor = persistStore(store)