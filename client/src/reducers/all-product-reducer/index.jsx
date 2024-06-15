import { createSlice } from "@reduxjs/toolkit";
const allProductsSlice = createSlice({
    name:'allProduct',
    initialState:{
        allProducts:[],
        fruit:[],
        meat:[],
        vegerable:[],
        bread:[]
    },
    reducers:{
        setAllProducts(state,action){
            state.allProducts = action.payload
        },
        setFruits(state,action){
            state.fruit = action.payload
        },
        setMeat(state,action){
            state.meat = action.payload
        },
        setVegetable(state,action){
            state.vegerable = action.payload
        },
        setBread(state,action){
            state.bread = action.payload
        }
    }
})
export const {setAllProducts,setFruits,setMeat,setBread,setVegetable} = allProductsSlice.actions;
export default allProductsSlice.reducer