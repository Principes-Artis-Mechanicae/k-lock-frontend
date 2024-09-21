import axios from "axios";
import { Dispatch } from "redux";

import { IFormState } from "@/store/slice/form.slice";
import { uiActions } from "@/store/slice/ui.slice";

export const sendApplicationData = async (formData: IFormState, dispatch: Dispatch) => {
    try {
        const response = await axios.post(`/api/application/primary`, formData);

        if (response.status === 201) {
            dispatch(uiActions.setModalType("complete"));
        }
    } catch (error: unknown) {
        dispatch(uiActions.hideModal());
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            alert("학적 정보가 없습니다.");
        } else if (axios.isAxiosError(error) && error.response?.status === 400) {
            alert("이미 배정된 학생입니다. 고장 신고 및 변경 신청을 이용해주세요.");
        } else if (axios.isAxiosError(error) && error.response?.status === 409) {
            alert("이미 신청한 학생입니다.");
        } else {
            console.error("Error submitting application:", error);
            alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    }
};
