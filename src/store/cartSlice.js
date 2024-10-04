import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {},
        clickedItems: {},
        count: 0,
    },
    reducers: {
        toggleClickedItem(state, action) {
            const id = action.payload;
            state.clickedItems[id] = !state.clickedItems[id];
        },
        addToCart(state, action) {
            const item = action.payload;
            if (!state.cart[item.id]) {
                state.cart[item.id] = item;
                state.count += 1;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            if (state.cart[id]) {
                delete state.cart[id];
                state.count -= 1;
            }
        },
    },
});


export const { toggleClickedItem, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;


export const isClickedItem = (state, id) => state.cart.clickedItems[id];


export const selectCartCount = (state) => state.cart.count;
