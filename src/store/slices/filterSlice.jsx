import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchTerm: "",
    radio: null,
    checkBox: [false, false],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    changeRadio(state, action) {
      state.radio = action.payload;
    },
    changeCheckBox1(state, action) {
      state.checkBox[0] = action.payload;
    },
    changeCheckBox2(state, action){
        state.checkBox[1] = action.payload
    }
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeCheckBox1, changeCheckBox2, changeRadio, changeSearchTerm } =
  filterSlice.actions;
