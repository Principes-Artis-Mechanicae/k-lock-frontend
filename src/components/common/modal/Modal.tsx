import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@/assets/close.svg";

import { ModalBackDrop, ModalContainer, ModalWrapper, ModalController } from "./Modal.style";
import ApplyConfirmModal from "./content/ApplyConfirmModal";
import AuthConfirmModal from "./content/AuthConfirmModal";
import AuthFormModal from "./content/AuthFormModal";
import CompleteModal from "./content/CompleteModal";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch, RootState } from "@/store/store";

const ModalContent: React.FC<{ modalType: string }> = ({ modalType }) => {
    switch (modalType) {
        case "applyConfirm":
            return <ApplyConfirmModal />;
        case "authConfirm":
            return <AuthConfirmModal />;
        case "authForm":
            return <AuthFormModal />;
        case "complete":
            return <CompleteModal />;
        default:
            return <div>오류</div>;
    }
};

const Modal: React.FC = () => {
    const dispatch: RootDispatch = useDispatch();
    const { modalType } = useSelector((state: RootState) => state.ui);

    const handleModalClose = useCallback(() => {
        dispatch(uiActions.hideModal());
    }, [dispatch]);

    return (
        <>
            <ModalBackDrop onClick={modalType !== "authForm" ? handleModalClose : undefined} />
            <ModalWrapper>
                {modalType !== "authForm" && (
                    <ModalController onClick={handleModalClose}>
                        <img src={CloseIcon} alt="close" />
                    </ModalController>
                )}
                <ModalContainer>
                    <ModalContent modalType={modalType} />
                </ModalContainer>
            </ModalWrapper>
        </>
    );
};

export default Modal;
