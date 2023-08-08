//created a slice
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      //mutating the state directly, Immer library handling the immutable states
      state.value += 1;
    },
    decrement: (state) => {
        //mutating the initial state value, updating the value 
      state.value -= 1;
    },
    increaseByAmount: (state, action) => {
      let { payload } = action;
      //convert string value inside payload to number
      payload = Number(payload);

      state.value += payload;
    },
  },
});

//action creator: action objects: type, payload
export const { increment, decrement, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
