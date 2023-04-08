import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type O= NodeListOf<HTMLElement>
type Rial={
    listMonorial:O[]


}
const initialState:Rial={
    listMonorial:[],
}
const tableSlice=createSlice({
    name:'tableHoist',
    initialState,
    reducers:{
setData(state,action: PayloadAction<string>){
    
    
    
}

    }
})
export const{setData}=tableSlice.actions
export default tableSlice.reducer