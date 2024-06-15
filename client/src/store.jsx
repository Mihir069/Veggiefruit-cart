import { configureStore } from '@reduxjs/toolkit';
import allProductReducer from './reducers/all-product-reducer';

const store =  configureStore({
    reducer: {
        allProduct: allProductReducer
        
    }
});
export default store;
