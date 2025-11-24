import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/products.api";
import addToCartReducer from './slices/addToCartSlice'
import openCartDrawerReducer from './slices/openCartDrawerSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        cart: addToCartReducer,
        cartDrawer: openCartDrawerReducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware)
})