import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './employeesSlice';
import tableReducer from "./tableSlice";
const store=configureStore({
    reducer:{
job:employeesReducer,
table:tableReducer,
},    
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
