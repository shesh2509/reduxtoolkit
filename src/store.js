import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './features/cart/cartSlice'
import moadlReducer from './features/modal/modalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: moadlReducer,
    },
});