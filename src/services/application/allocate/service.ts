import axios from "axios";
import { Dispatch } from "redux";

import { AuthResponse } from "./types";
import { authActions } from "@/store/slice/auth.slice";
import { uiActions } from "@/store/slice/ui.slice";

export const getStudentData = async (searchStudentName: string, searchStudentNumber: string, dispatch: Dispatch) => {
    try {
        const response: AuthResponse = await axios.get(`/api/application/allocate/${searchStudentNumber}`);

        if (response.status === 200) {
            const { studentName, studentNumber, lockerName, pw } = response.data.response;
            if (searchStudentName !== studentName) {
                alert("학번과 이름이 일치하지 않습니다.");
                return;
            }
            dispatch(authActions.setStudentData({ studentName, studentNumber, lockerName, pw }));
            dispatch(uiActions.hideModal());
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const { status } = error.response || {};

            if (status === 404) {
                alert("사물함 배정 정보가 없는 학생입니다.");
            } else {
                console.error("Error fetching student data:", error);
                alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
            }
        } else {
            console.error("Unknown error occurred:", error);
            alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
        }
    }
};
