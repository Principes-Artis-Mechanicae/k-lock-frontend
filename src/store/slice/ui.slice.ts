import { createSlice } from "@reduxjs/toolkit";

export interface IUserInterfaceState {
    modalType?: string;
    isModalOpened: boolean;
    isNavAsideOpened: boolean;
}

const initialState: IUserInterfaceState = {
    modalType: undefined,
    isModalOpened: false,
    isNavAsideOpened: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setModalType: (state, action) => {
            state.modalType = action.payload;
        },
        toggleNavAside: (state) => {
            if (state.isNavAsideOpened) state.isNavAsideOpened = false;
            else state.isNavAsideOpened = true;
        },
        closeNavAside: (state) => {
            state.isNavAsideOpened = false;
        },
        showModal: (state) => {
            state.isModalOpened = true;
        },
        hideModal: (state) => {
            state.isModalOpened = false;
        },
    },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
