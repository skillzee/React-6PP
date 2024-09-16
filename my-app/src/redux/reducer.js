import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
  {
    coins: [],
  },
  (builder) => {
    builder.addCase('firstCase', (state, action) => {
      state.coins = action.payload
      
      
    });
  }
);
