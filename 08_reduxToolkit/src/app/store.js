import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/Todo/todoslice"

export const Store = configureStore({
    reducer:todoReducer
});