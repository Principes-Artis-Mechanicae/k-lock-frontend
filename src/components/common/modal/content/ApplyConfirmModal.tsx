import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemButton } from "@/components/common/form/Form.style";

import { sendAdditionalApplicationData } from "@/services/application/additional/service";
import { sendApplicationData } from "@/services/application/primary/service";
import { sendReportApplicationData } from "@/services/application/replacement/service";

import { ModalTitle } from "../Modal.style";
import { RootDispatch, RootState } from "@/store/store";

const ApplyConfirmModal = () => {
    const dispatch: RootDispatch = useDispatch();
    const { dateType } = useSelector((state: RootState) => state.period);
    const formData = useSelector((state: RootState) => state.form);

    const handleSubmit = useCallback(() => {
        if (formData.formType === "report") {
            sendReportApplicationData(formData, dispatch);
        } else if (dateType === "additionalApply") {
            sendAdditionalApplicationData(formData, dispatch);
        } else {
            sendApplicationData(formData, dispatch);
        }
    }, [formData, dateType, dispatch]);

    return (
        <>
            <ModalTitle>입력 정보 확인</ModalTitle>
            <div>입력하신 정보에 오류가 없습니까?</div>
            <ItemButton onClick={handleSubmit}>확인</ItemButton>
        </>
    );
};

export default ApplyConfirmModal;
