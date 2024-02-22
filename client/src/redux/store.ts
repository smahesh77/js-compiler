import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";

export const store = configureStore({
    reducer:{
        compilerSlice // cause same name otherwise compilerslice:ur name
    }
})

export type RootState = ReturnType<typeof store.getState>