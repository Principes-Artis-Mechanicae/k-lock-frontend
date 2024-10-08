import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemButton } from "@/components/common/form/Form.style";

import { getStudentData } from "@/services/application/allocate/service";

import { ModalContent, ModalTitle } from "../Modal.style";
import { authActions } from "@/store/slice/auth.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch, RootState } from "@/store/store";

const AuthConfirmModal = () => {
    const dispatch: RootDispatch = useDispatch();
    const { authStudentNumber, authStudentName } = useSelector((state: RootState) => state.auth);

    const handleDeleteAuth = useCallback(() => {
        dispatch(authActions.deleteStudentData());
        dispatch(uiActions.setModalType("authForm"));
    }, [dispatch]);

    const handleModalClose = useCallback(() => {
        getStudentData(authStudentName, authStudentNumber, dispatch);
        dispatch(uiActions.hideModal());
    }, [authStudentName, authStudentNumber, dispatch]);

    return (
        <>
            <ModalTitle>사용자 정보 입력</ModalTitle>
            <ModalContent>
                {`계속해서 (${authStudentNumber}, ${authStudentName})로 사용하시겠습니까?`}
                <ItemButton onClick={handleModalClose}>예</ItemButton>
                <ItemButton
                    style={{ backgroundColor: "#fff", marginTop: "0", color: "#000" }}
                    onClick={handleDeleteAuth}
                >
                    아니오
                </ItemButton>
            </ModalContent>
        </>
    );
};

export default AuthConfirmModal;
