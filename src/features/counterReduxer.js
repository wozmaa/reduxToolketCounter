import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const inc = createAction("inc");
export const dec = createAction("dec")

const counterReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(inc, (state, action) => {
    state.counter += 1;
  })
  .addCase(dec, (state, action) => {
      if(state.counter > 0)
      state.counter -= 1
  })
});

export default counterReducer;
