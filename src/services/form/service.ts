import axios from "axios";
import { Dispatch } from "redux";

import { PeriodResponse } from "./types";
import { periodActions } from "@/store/slice/period.slice";

export const getFormPeriod = async () => {
    try {
        const response: PeriodResponse = await axios.get(`api/forms/now`);
        return response.data.response;
    } catch (error) {
        console.error("신청 기간을 불러오는 중 오류가 발생했습니다:", error);
        return null;
    }
};

export const fetchAndSetPeriod = async (dispatch: Dispatch) => {
    const periodData = await getFormPeriod();
    if (periodData) {
        dispatch(periodActions.setPeriod(periodData));
    } else {
        console.log("신청 기간 데이터를 불러오지 못했습니다.");
    }
};
