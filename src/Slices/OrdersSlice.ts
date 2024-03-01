import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    data: [],
};

export const ordersSlice = createSlice({
    name: "ordersSlice",
    initialState: initialState,
    reducers: {
        addOrder: (state, action) => {
            state.data.push(action.payload);
        },
        removeOrder: (state, action) => {
            state.data.splice(action.payload, 1);
        },
    },
});

export const { addOrder, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
