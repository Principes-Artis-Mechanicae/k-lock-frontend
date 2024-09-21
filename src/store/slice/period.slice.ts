import { createSlice } from "@reduxjs/toolkit";

export interface IPeriodState {
    applyFormId: number;
    year: number;
    semester: number;
    firstApplyStartDate: string;
    firstApplyEndDate: string;
    semesterEndDate: string;
    dateType?: "firstApply" | "additionalApply" | "disable";
}

const initialState: IPeriodState = {
    applyFormId: 0,
    year: 0,
    semester: 0,
    firstApplyStartDate: "",
    firstApplyEndDate: "",
    semesterEndDate: "",
    dateType: undefined,
};

const periodSlice = createSlice({
    name: "period",
    initialState,
    reducers: {
        setDateType(state, action) {
            state.dateType = action.payload;
        },
        setPeriod(state, action) {
            state.applyFormId = action.payload.applyFormId;
            state.year = action.payload.year;
            state.semester = action.payload.semester;
            state.firstApplyStartDate = action.payload.firstApplyStartDate;
            state.firstApplyEndDate = action.payload.firstApplyEndDate;
            state.semesterEndDate = action.payload.semesterEndDate;

            console.log("신청 기간:", action.payload);
        },
    },
});

export const periodActions = periodSlice.actions;
export const periodReducer = periodSlice.reducer;
