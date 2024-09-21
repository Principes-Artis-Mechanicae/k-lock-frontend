import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    authStudentName: string;
    authStudentNumber: string;
    authLockerName: string;
    authLockerPassword: string;
}

const initialState: IAuthState = {
    authStudentName: "",
    authStudentNumber: "",
    authLockerName: "",
    authLockerPassword: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        deleteStudentData(state) {
            state.authStudentName = "";
            state.authStudentNumber = "";
            state.authLockerName = "";
            state.authLockerPassword = "";
        },

        setStudentData(state, action) {
            state.authStudentName = action.payload.studentName;
            state.authStudentNumber = action.payload.studentNumber;
            state.authLockerName = action.payload.lockerName;
            state.authLockerPassword = action.payload.pw;
        },
        setStudentName(state, action) {
            state.authStudentName = action.payload;
        },
        setStudentNumber(state, action) {
            state.authStudentNumber = action.payload;
        },
        setLockerName(state, action) {
            state.authLockerName = action.payload;
        },
        setLockerPassword(state, action) {
            state.authLockerPassword = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
