import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/dataSlice";
import {
  filterReducer,
  changeCheckBox1,
  changeCheckBox2,
  changeRadio,
  changeSearchTerm,
} from "./slices/filterSlice";
import { searchFilter } from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    items: dataReducer,
    filter: filterReducer,
  },
});

export {
  store,
  changeCheckBox1,
  changeCheckBox2,
  changeRadio,
  changeSearchTerm,
  searchFilter,
};
