/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { isBefore, isAfter } from "date-fns";

import { periodActions } from "@/store/slice/period.slice";
import { RootState, RootDispatch } from "@/store/store";

export interface ProtectedRouteProps {
    children: React.ReactNode;
    isApply?: boolean;
}

export const DateGuard = ({ children, isApply }: ProtectedRouteProps) => {
    const dispatch: RootDispatch = useDispatch();
    const period = useSelector((state: RootState) => state.period);

    // const currentDate = new Date();

    // const currentDate = new Date("2024-09-20T00:00:00"); // firstApply test
    const currentDate = new Date("2024-10-01T00:00:00"); // additionalApply test
    // const currentDate = new Date("2024-06-01T00:00:00"); // disable test

    const startDate = useMemo(
        () => (period?.firstApplyStartDate ? new Date(period.firstApplyStartDate) : null),
        [period?.firstApplyStartDate],
    );
    const endDate = useMemo(
        () => (period?.firstApplyEndDate ? new Date(period.firstApplyEndDate) : null),
        [period?.firstApplyEndDate],
    );
    const semesterEndDate = useMemo(
        () => (period?.semesterEndDate ? new Date(period.semesterEndDate) : null),
        [period?.semesterEndDate],
    );

    useEffect(() => {
        if (!startDate || !endDate || !semesterEndDate) return;

        let dateType: "firstApply" | "additionalApply" | "disable" = "disable";

        if (isAfter(currentDate, startDate) && isBefore(currentDate, endDate)) {
            dateType = "firstApply";
        } else if (isAfter(currentDate, endDate) && isBefore(currentDate, semesterEndDate)) {
            dateType = "additionalApply";
        }

        dispatch(periodActions.setDateType(dateType));
    }, [currentDate, startDate, endDate, semesterEndDate, dispatch]);

    if (!startDate || !endDate || !semesterEndDate) {
        return <Navigate to="/" replace />;
    }

    if (period.dateType === "disable" || (!isApply && period.dateType === "firstApply")) {
        alert("현재 기간에 해당하는 서비스를 이용할 수 없습니다.");
        return <Navigate to="/" replace />;
    }

    return children;
};
