import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const addToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id == action.payload.id)
            if(existingItem){
                if(existingItem.quantity == 10) return;
                existingItem.quantity += action.payload.quantity;
                existingItem.price = (existingItem.unitPrice * existingItem.quantity).toFixed(2)
            }else{
                state.items.push(action.payload)
            }
        },

        removeItemFromCart: (state, action) =>{
            state.items = state.items.filter(items => items.id != action.payload)
        },

        incrementQuantity: (state,action) => {
            const findItem = state.items.find(item => item.id == action.payload);
            if(findItem){
                if(findItem.quantity == 10) return;
                findItem.quantity += 1;
                findItem.price = (findItem.unitPrice * findItem.quantity).toFixed(2);
            }else{
                return null;
            }
        },

        decrementQuantity: (state, action) => {
            const findItem = state.items.find(item => item.id == action.payload);
            if(findItem){
                if(findItem.quantity == 1) return;
                findItem.quantity -= 1;
                findItem.price = (findItem.unitPrice * findItem.quantity).toFixed(2);
            }else{
                return null;
            }
        }
        
    }
})

export const {
    addToCart, 
    removeItemFromCart, 
    incrementQuantity,
    decrementQuantity
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
