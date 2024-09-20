import { FormWrapper, FormItem, ItemTitle, ItemContent, ItemTextArea } from "@/components/common/form/Form.style";

import ApplyForm from "../apply/ApplyForm";

const reportForm = () => {
    return (
        <>
            <FormWrapper>
                <FormItem>
                    <ItemTitle>현재 사물함: </ItemTitle>
                    <ItemContent>L-24</ItemContent>
                </FormItem>
                <FormItem>
                    <ItemTitle>비밀번호: </ItemTitle>
                    <ItemContent>0000</ItemContent>
                </FormItem>
                <FormItem>
                    <ItemTitle>고장 신고</ItemTitle>
                    <ItemTextArea maxLength={100} rows={1} placeholder="고장 내용을 입력해주세요.(100자 제한)" />
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

export default reportForm;
