import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "clientCart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProducts: (state, action) => {
            const similar = state.products.find(product => product._id === action.payload._id && product.quantity === action.payload.quantity);
            
            if(!similar) {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
            return state;
        },

        clearCart: (state) => {
            state.products = [];
            state.total = null;
            state.quantity = null;
        },

        removeProduct: (state, action) => {
            const sameProduct = state.products.find(
                product => product._id === action.payload._id && product.quantity === action.payload.quantity
            );
        
            if (sameProduct) {
                // Reduce the quantity
                state.quantity -= 1;
        
                // Update total by subtracting the product price multiplied by its quantity
                state.total -= sameProduct.price * sameProduct.quantity;
        
                // Remove the product from the array
                state.products = state.products.filter(
                    product => !(product._id === sameProduct._id && product.quantity === sameProduct.quantity)
                );
            }
        }
    },
});

export const { addProducts, clearCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;