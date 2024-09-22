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

        if (axios.isAxiosError(error)) {
            const { status } = error.response || {};

            if (status === 404) {
                alert("학적 정보가 없습니다. 페이지 아래 카카오톡 아이디로 문의해주세요.");
            } else if (status === 400) {
                alert("잘못된 신청 기간입니다. 신청 기간을 확인하고 다시 시도해주세요.");
            } else if (status === 409) {
                alert("이미 신청한 학생입니다.");
            } else {
                console.error("Error submitting application:", error);
                alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
            }
        } else {
            console.error("Unknown error occurred:", error);
            alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
        }
    }
};
