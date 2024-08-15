import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, productResTyp } from './types';

const initialState: CartItem[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productResTyp>) => {
            const product = action.payload;
            const existingItem = state.find((i) => i._id === product._id);
            if (existingItem) {
                existingItem.quantity!++;
            } else {
                state.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        assignNewQuantity: (state, action: PayloadAction<{ id: string; newQuantity: number }>) => {
            const { id, newQuantity } = action.payload;
            const existingItem = state.find((i) => i._id === id);
            if (existingItem) {
                existingItem.quantity = newQuantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return state;
        },
        removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
            const itemToRemove = action.payload;
            const updatedState = state.filter((item) => item._id !== itemToRemove._id);
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
        decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
            const item = action.payload;
            const existingItem = state.find((i) => i._id === item._id);
            if (existingItem && existingItem.quantity! > 1) {
                existingItem.quantity!--;
            } else {
                const updatedState = state.filter((i) => i._id !== item._id);
                localStorage.setItem('cart', JSON.stringify(updatedState));
                return updatedState;
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        incrementQuantity: (state, action: PayloadAction<{ _id: string }>) => {
            const item = action.payload;
            const existingItem = state.find((i) => i._id === item._id);
            if (existingItem) {
                existingItem.quantity++;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return state;
        },
        clearCart: () => {
            localStorage.removeItem('cart');
            return [];
        }
    }
});

export const { addToCart, removeFromCart, decreaseQuantity, incrementQuantity, clearCart, assignNewQuantity } = cartSlice.actions;

export default cartSlice.reducer;
