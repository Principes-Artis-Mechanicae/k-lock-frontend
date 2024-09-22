import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ItemButton } from "@/components/common/form/Form.style";

import CheckIcon from "@/assets/icons/check.png";

import { ModalContent, ModalTitle } from "../Modal.style";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

const CompleteModal = () => {
    const dispatch: RootDispatch = useDispatch();

    const handleModalClose = useCallback(() => {
        dispatch(uiActions.hideModal());
    }, [dispatch]);

    return (
        <>
            <ModalTitle>신청 완료</ModalTitle>
            <ModalContent>
                <img src={CheckIcon} alt="check" />
                <div>사물함 신청이 완료되었습니다.</div>
                <ItemButton
                    onClick={() => {
                        handleModalClose();
                    }}
                >
                    확인
                </ItemButton>
            </ModalContent>
        </>
    );
};

export default CompleteModal;
