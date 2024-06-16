import { createSlice } from "@reduxjs/toolkit";
const allProductsSlice = createSlice({
    name:'allProduct',
    initialState:{
        allProducts:[],
        fruit:[],
        meat:[],
        vegerable:[],
        bread:[],
        organicVegetables:[],
        bestSeller:[]
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
        },
        setOrganicVegetables(state,action){
            state.organicVegetables = action.payload
        },
        setBestSeller(state,action){
            state.bestSeller = action.payload
        }
    }
})
export const {setAllProducts,setFruits,setMeat,setBread,setVegetable,setOrganicVegetables,setBestSeller} = allProductsSlice.actions;
export default allProductsSlice.reducer