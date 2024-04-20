import { counterSlice } from "./slice";

export const {
    counterIncrement,
    counterDecrement,
    counterReset,
    counterIncrementByAmount,
    counterArray,
    measureDataArray,
} = counterSlice.actions;