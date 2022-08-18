import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filterSlice";
import todoSlice from "./slice/todoSlice";


const store = configureStore({
  reducer: {
    todo: todoSlice,
    filters: filterSlice
  }
});

export default store;