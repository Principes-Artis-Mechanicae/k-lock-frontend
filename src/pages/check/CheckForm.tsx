import { useSelector } from "react-redux";

import { FormItem, FormWrapper, ItemContent, ItemTitle } from "@/components/common/form/Form.style";
import NoticeCardContainer from "@/components/common/noticeCard/NoticeCardContainer";

import { RootState } from "@/store/store";

const CheckForm = () => {
    const authState = useSelector((state: RootState) => state.auth);

    return (
        <>
            <FormWrapper>
                <FormItem>
                    <ItemTitle>이름: </ItemTitle>
                    <ItemContent>{authState.studentName}</ItemContent>
                </FormItem>

                <FormItem>
                    <ItemTitle>학번: </ItemTitle>
                    <ItemContent>{authState.studentNumber}</ItemContent>
                </FormItem>

                <FormItem>
                    <ItemTitle>사물함: </ItemTitle>
                    <ItemContent>{authState.lockerName}</ItemContent>
                </FormItem>

                <FormItem>
                    <ItemTitle>비밀번호: </ItemTitle>
                    <ItemContent>{authState.lockerPassword}</ItemContent>
                </FormItem>

                <FormItem>* 비밀번호를 임의로 변경할 시 변경한 비밀번호를 잊지 않도록 주의해주세요.</FormItem>
                <FormItem>* 비밀번호가 일치하지 않을 시 0000으로 시도해주세요.</FormItem>
            </FormWrapper>
            <NoticeCardContainer />
        </>
    );
};

export default CheckForm;
