import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../Features/apiSlice';
import cartSlice from '../Features/cartSlice';
import userSlice from '../Features/userSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
