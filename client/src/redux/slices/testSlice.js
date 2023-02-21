import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: "test",
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        testAction: (state, action) => {
            state.test = action.payload;
        },
    },
});

export const { testAction } = testSlice.actions;

export default testSlice.reducer;
