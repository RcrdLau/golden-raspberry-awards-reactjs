import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ICounterProps = {
    counter: number;
    loading: boolean;
    userData: any,
    measureData: any,
};

const counterInitialState: ICounterProps = {
    counter: 0,
    loading: false,
    userData: {},
    measureData: {},
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialState,
    reducers: {
        counterIncrement: (state) => {
            state.counter += 1;
        },
        counterDecrement: (state) => {
            state.counter -= 1;
        },
        counterReset: (state) => {
            state.counter = 0;
        },
        counterIncrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        counterArray: (state, action: PayloadAction<{}>) => {
            state.userData = action.payload;
        },
        measureDataArray: (state, action: PayloadAction<{}>) => {
            state.measureData = action.payload;
        },
    },
});