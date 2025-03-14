import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name: "clientWishlist",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addFavourite: (state, action) => {
            const index = state.products.findIndex(item => item._id === action.payload._id);
            if(index === -1){
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            } 
            return state;
        },

        clearFavourites: (state) => {
            state.products = [];
            state.total = null;
            state.quantity = null;
        },

        removeFavourite: (state, action) => {
            state.quantity -= 1 && state.quantity > 0;
            state.products = state.products.filter(product => product._id !== action.payload._id);
            state.total -= state.total > 0 && action.payload.price;
        },
    },
});

export const { addFavourite, clearFavourites, specialFavourite, removeFavourite } = wishlistSlice.actions;
export default wishlistSlice.reducer;