import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "@/store/slice/ui.slice";
import { RootState, RootDispatch } from "@/store/store";

export interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const AuthGuard = ({ children }: ProtectedRouteProps) => {
    const dispatch: RootDispatch = useDispatch();
    const { authStudentNumber } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (authStudentNumber) {
            dispatch(uiActions.setModalType("authConfirm"));
        } else {
            dispatch(uiActions.setModalType("authForm"));
        }
        dispatch(uiActions.showModal());
    });

    return children;
};
