import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFormState {
    searchStudentNumber: string;
    studentName: string;
    studentNumber: string;
    firstFloor: string;
    firstHeight: string;
    secondFloor: string;
    secondHeight: string;
    reportContent: string;
    formType: "report" | "apply";
}

const initialState: IFormState = {
    searchStudentNumber: "",
    studentName: "",
    studentNumber: "",
    firstFloor: "",
    firstHeight: "",
    secondFloor: "",
    secondHeight: "",
    reportContent: "",
    formType: "apply",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeFormType(state, payload) {
            state.formType = payload.payload;
        },
        deleteFormData(state) {
            state.searchStudentNumber = "";
            state.studentName = "";
            state.studentNumber = "";
            state.firstFloor = "";
            state.firstHeight = "";
            state.secondFloor = "";
            state.secondHeight = "";
            state.reportContent = "";
        },
        setSearchStudentNumber(state, action: PayloadAction<string>) {
            state.searchStudentNumber = action.payload;
        },
        setStudentName(state, action: PayloadAction<string>) {
            state.studentName = action.payload;
        },
        setStudentNumber(state, action: PayloadAction<string>) {
            state.studentNumber = action.payload;
        },
        setFirstFloor(state, action: PayloadAction<string>) {
            state.firstFloor = action.payload;
        },
        setFirstHeight(state, action: PayloadAction<string>) {
            state.firstHeight = action.payload;
        },
        setSecondFloor(state, action: PayloadAction<string>) {
            state.secondFloor = action.payload;
        },
        setSecondHeight(state, action: PayloadAction<string>) {
            state.secondHeight = action.payload;
        },
        setReportContent(state, action: PayloadAction<string>) {
            state.reportContent = action.payload;
        },
    },
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
