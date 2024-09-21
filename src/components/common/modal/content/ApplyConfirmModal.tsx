import { useDispatch, useSelector } from "react-redux";

import { ItemButton } from "@/components/common/form/Form.style";

import { sendApplicationData } from "@/services/application/primary/service";
import { sendReportApplicationData } from "@/services/application/replacement/service";

import { ModalTitle } from "../Modal.style";
import { RootDispatch, RootState } from "@/store/store";

const ApplyConfirmModal = () => {
    const dispatch: RootDispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.form);

    const handleSubmit = () => {
        console.log(formData);
        if (formData.reportContent) {
            sendReportApplicationData(formData, dispatch);
        } else {
            sendApplicationData(formData, dispatch);
        }
    };

    return (
        <>
            <ModalTitle>입력 정보 확인</ModalTitle>
            <div>입력하신 정보에 오류가 없습니까?</div>
            <ItemButton onClick={handleSubmit}>확인</ItemButton>
        </>
    );
};

export default ApplyConfirmModal;
