import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from './Slices/OrdersSlice';

const store = configureStore({
    reducer: {
        orders: ordersReducer
    }
})

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;