import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        cartItems:[]
    },
    reducers:{
        addTocart(state,action){
            state.cartItems.push(action.payload);
        },
        removeFromCart(state,action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        clearCart(state){
            state.cartItems = [];
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    }
});

export const {addTocart, removeFromCart, clearCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;