import { configureStore } from '@reduxjs/toolkit';
import allProductReducer from './reducers/all-product-reducer';
import cartReducer from './reducers/cart-reducer';

const store =  configureStore({
    reducer: {
        allProduct: allProductReducer,
        cart: cartReducer
        
    }
});
export default store;
