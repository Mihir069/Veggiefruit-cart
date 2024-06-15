import { createSlice } from "@reduxjs/toolkit";

const allProductsSlice = createSlice({
    name:'allProduct',
    initialState:{
        allProducts:[]
    },
    reducers:{
        setAllProducts(state,action){
            state.allProducts = action.payload
        }
    }
})
export const {setAllProducts} = allProductsSlice.actions;
export default allProductsSlice.reducer