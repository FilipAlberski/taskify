import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
const store = configureStore({
    reducer: {
        app: appReducer,
    },
});
//test
export default store;
