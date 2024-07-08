import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.push(action.payload)
        },
        removeFromWishlist(state, action) {
            return state.filter(product => product.id !== action.payload);
        },
    }

})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer;