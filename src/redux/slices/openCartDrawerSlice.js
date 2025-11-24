import { createSlice } from "@reduxjs/toolkit";


const openCartDrawerSlice = createSlice({
    name: 'cartDrawer',
    initialState: {
        isOpen: false
    },
    reducers: {
        setIsOpen: (state,action) => {
            state.isOpen = action.payload
        }
    }
});

export const {setIsOpen} = openCartDrawerSlice.actions
export default openCartDrawerSlice.reducer