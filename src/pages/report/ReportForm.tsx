import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormWrapper, FormItem, ItemTitle, ItemContent, ItemTextArea } from "@/components/common/form/Form.style";

import ApplyForm from "../../pages/apply/ApplyForm";
import { formActions } from "@/store/slice/form.slice";
import { RootDispatch, RootState } from "@/store/store";

const ReportForm = () => {
    const dispatch: RootDispatch = useDispatch();
    const { reportContent } = useSelector((state: RootState) => state.form);
    const { authLockerName, authLockerPassword } = useSelector((state: RootState) => state.auth);

    const handleReportChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(formActions.setReportContent(e.target.value));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(formActions.changeFormType("report"));

        return () => {
            dispatch(formActions.changeFormType("apply"));
        };
    }, [dispatch]);

    return (
        <>
            <FormWrapper>
                <FormItem>
                    <ItemTitle>현재 사물함: </ItemTitle>
                    <ItemContent>{authLockerName}</ItemContent>
                </FormItem>
                <FormItem>
                    <ItemTitle>비밀번호: </ItemTitle>
                    <ItemContent>{authLockerPassword}</ItemContent>
                </FormItem>
                <FormItem>
                    <ItemTitle>고장 신고</ItemTitle>
                    <ItemTextArea
                        maxLength={100}
                        rows={1}
                        placeholder="고장 내용을 입력해주세요.(100자 제한)"
                        value={reportContent}
                        onChange={handleReportChange}
                    />
                </FormItem>
                <FormItem>* 고장 신고 시, 관리자가 확인 후 조치를 취해드립니다.</FormItem>
                <FormItem>
                    * 고장 신고 후 일주일 내로 재배정이 안될 경우, 아래 카톡 아이디로 문의 부탁드립니다.
                </FormItem>
            </FormWrapper>
            <ApplyForm />
        </>
    );
};

export default ReportForm;
