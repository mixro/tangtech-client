import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
    name: "clientServices",
    initialState: {
        services: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getServiceStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getServiceSuccess: (state, action) => {
            state.isFetching = false;
            state.services = action.payload;
        },
        getServiceFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {
    getServiceFailure,
    getServiceStart,
    getServiceSuccess,
} = serviceSlice.actions;

export default serviceSlice.reducer
