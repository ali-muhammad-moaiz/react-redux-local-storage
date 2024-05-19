import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../functionalities/todoSlice'

const DataStore = configureStore({
    reducer: todoReducer
})

export default DataStore;