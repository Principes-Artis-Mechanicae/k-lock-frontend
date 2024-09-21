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

    const currentDate = new Date();

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
        if (!startDate || !endDate || !semesterEndDate) {
            return;
        }

        return () => {
            if (isAfter(currentDate, startDate) && isBefore(currentDate, endDate)) {
                dispatch(periodActions.setDateType("firstApply"));
            } else if (isAfter(currentDate, endDate) && isBefore(currentDate, semesterEndDate)) {
                dispatch(periodActions.setDateType("additionalApply"));
            } else {
                dispatch(periodActions.setDateType("disable"));
            }

            console.log("기간 설정 완료:", period.dateType, currentDate);
        };
    }, [currentDate, startDate, endDate, semesterEndDate, dispatch]);

    if (!startDate || !endDate || !semesterEndDate) {
        return <Navigate to="/" replace />;
    }

    if (period.dateType === "disable") {
        alert("현재 기간에 해당하는 서비스를 이용할 수 없습니다.");
        return <Navigate to="/" replace />;
    } else if (!isApply && period.dateType === "firstApply") {
        alert("현재 기간에 해당하는 서비스를 이용할 수 없습니다.");
        return <Navigate to="/" replace />;
    }

    return children;
};
