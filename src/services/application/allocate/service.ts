import axios from "axios";
import { Dispatch } from "redux";

import { AuthResponse } from "./types";
import { authActions } from "@/store/slice/auth.slice";

export const getStudentData = async (studentNumber: string, dispatch: Dispatch) => {
    try {
        const response: AuthResponse = await axios.get(`/api/application/allocate/${studentNumber}`);

        if (response.status === 200) {
            const { studentName, studentNumber, lockerName, pw } = response.data.response;
            dispatch(authActions.setStudentData({ studentName, studentNumber, lockerName, pw }));
        }
    } catch (error) {
        console.error("Error fetching student data:", error);
        return null;
    }
};
