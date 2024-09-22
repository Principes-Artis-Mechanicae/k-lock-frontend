import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormItem, ItemButton, ItemInput, ItemTitle } from "@/components/common/form/Form.style";

import { getStudentData } from "@/services/application/allocate/service";

import { ModalContent, ModalTitle } from "../Modal.style";
import { formActions } from "@/store/slice/form.slice";
import { RootDispatch, RootState } from "@/store/store";

const AuthFormModal = () => {
    const dispatch: RootDispatch = useDispatch();
    const { searchStudentNumber, searchStudentName } = useSelector((state: RootState) => state.form);

    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (field === "studentName") {
                dispatch(formActions.setSearchStudentName(e.target.value));
            } else if (field === "studentNumber") {
                dispatch(formActions.setSearchStudentNumber(e.target.value));
            }
        },
        [dispatch],
    );

    const handleFindStudentData = useCallback(() => {
        getStudentData(searchStudentName, searchStudentNumber, dispatch);
    }, [searchStudentNumber, searchStudentName, dispatch]);

    return (
        <>
            <ModalTitle>사용자 정보 입력</ModalTitle>
            <ModalContent>
                <FormItem style={{ gap: "8px" }}>
                    <ItemTitle>성함</ItemTitle>
                    <ItemInput
                        placeholder="홍길동"
                        value={searchStudentName}
                        onChange={handleInputChange("studentName")}
                    />
                </FormItem>
                <FormItem style={{ gap: "8px" }}>
                    <ItemTitle>학번</ItemTitle>
                    <ItemInput
                        placeholder="2024000000"
                        value={searchStudentNumber}
                        onChange={handleInputChange("studentNumber")}
                    />
                </FormItem>
                <ItemButton onClick={handleFindStudentData}>확인</ItemButton>
            </ModalContent>
        </>
    );
};

export default AuthFormModal;
