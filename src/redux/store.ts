import { configureStore } from "@reduxjs/toolkit";
import reducers from "../redux";

const store = configureStore({
  reducer: reducers,
});

export default store;
