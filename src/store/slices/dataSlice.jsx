import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../components/data";

const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    searchFilter(state, action) {
      return data.filter((item) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const { searchFilter } = dataSlice.actions;
