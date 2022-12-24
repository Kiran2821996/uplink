import { configureStore } from "@reduxjs/toolkit";
import spaceXHistoryReducer from "./features/SpaceXHistorySlice";

export const store = configureStore({
    reducer:{
        data: spaceXHistoryReducer, 
    }
})