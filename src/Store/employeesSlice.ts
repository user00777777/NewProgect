import {createSlice,PayloadAction, Slice}from '@reduxjs/toolkit'
type Workers={
id:string;
completed?:boolean;
title:string


}

type JobState={
  list:Workers[];
}



const initialState:JobState={
list:[]

}

const employeesSlice:Slice<JobState>=createSlice({
  name:'employees',
  initialState,
  reducers:{
one(state,action:PayloadAction<string>){
 state.list.push({
id:new Date().toISOString(),
title:action.payload,

 })
}


  }
})
export const {one}=employeesSlice.actions;
export default employeesSlice.reducer