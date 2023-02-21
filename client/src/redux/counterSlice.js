import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },

        restartAmount: (state, action) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, incrementByAmount, restartAmount } =
    counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
