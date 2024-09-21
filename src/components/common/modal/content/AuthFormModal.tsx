import { useDispatch, useSelector } from "react-redux";

import { FormItem, ItemButton, ItemInput, ItemTitle } from "@/components/common/form/Form.style";

import { getStudentData } from "@/services/application/allocate/service";

import { ModalContent, ModalTitle } from "../Modal.style";
import { formActions } from "@/store/slice/form.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch, RootState } from "@/store/store";

const AuthFormModal = () => {
    const dispatch: RootDispatch = useDispatch();
    const { searchStudentNumber } = useSelector((state: RootState) => state.form);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formActions.setSearchStudentNumber(e.target.value));
    };

    const handleFindStudentData = () => {
        getStudentData(searchStudentNumber, dispatch);
        dispatch(uiActions.hideModal());
    };

    return (
        <>
            <ModalTitle>사용자 정보 입력</ModalTitle>
            <ModalContent>
                <FormItem>
                    <ItemTitle>학번</ItemTitle>
                    <ItemInput placeholder="2024000000" value={searchStudentNumber} onChange={handleInputChange} />
                </FormItem>
                <ItemButton
                    onClick={() => {
                        handleFindStudentData();
                    }}
                >
                    확인
                </ItemButton>
            </ModalContent>
        </>
    );
};

export default AuthFormModal;
