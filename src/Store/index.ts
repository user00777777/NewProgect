import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './employeesSlice';
const store=configureStore({
    reducer:{
job:employeesReducer,},    
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
