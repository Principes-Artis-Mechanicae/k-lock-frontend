import { FormItem, FormWrapper, ItemContent, ItemTitle } from "@/components/common/form/Form.style";

import NoticeCardContainer from "../common/noticeCard/NoticeCardContainer";

const CheckForm = () => {
    return (
        <>
            <FormWrapper>
                <FormItem>
                    <ItemTitle>이름: </ItemTitle>
                    <ItemContent>홍길동</ItemContent>
                </FormItem>

                <FormItem>
                    <ItemTitle>학번: </ItemTitle>
                    <ItemContent>20230000</ItemContent>
                </FormItem>

                <FormItem>
                    <ItemTitle>사물함: </ItemTitle>
                    <ItemContent>L-08</ItemContent>
                </FormItem>

                <FormItem>
                    <ItemTitle>비밀번호: </ItemTitle>
                    <ItemContent>0000</ItemContent>
                </FormItem>

                <FormItem>* 비밀번호를 임의로 변경할 시 변경한 비밀번호를 잊지 않도록 주의해주세요.</FormItem>
                <FormItem>* 비밀번호가 일치하지 않을 시 0000으로 시도해주세요.</FormItem>
            </FormWrapper>
            <NoticeCardContainer />
        </>
    );
};

export default CheckForm;
