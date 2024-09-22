import axios from "axios";
import { Dispatch } from "redux";

import { api } from "@/config/axios";

import { PeriodResponse } from "./types";
import { periodActions } from "@/store/slice/period.slice";

export const getAndSetPeriod = async (dispatch: Dispatch) => {
    try {
        const response: PeriodResponse = await api.get(`/forms/now`);
        const periodData = response.data.response;

        if (response.status === 200 && periodData) {
            dispatch(periodActions.setPeriod(periodData));
        } else {
            console.log("신청 기간 데이터를 불러오지 못했습니다.");
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const { status } = error.response || {};
            if (status === 404) {
                alert("활성화된 신청 폼을 찾을 수 없습니다.");
            }
        } else {
            console.error("신청 기간을 불러오는 중 오류가 발생했습니다:", error);
        }
    }
};
