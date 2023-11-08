import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/User";
import productsSlice from "./features/products/Products";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
    user: userSlice.reducer,
    products: productsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: {
    persistedReducer,
  },
});
