import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counterReduxer"

export const store = configureStore({
    reducer: counterReducer
})