import { FormWrapper, FormItem, ItemTitle, ItemInput, ItemRadioContainer } from "@/components/common/form/Form.style";

import Button from "../common/form/Button";
import RadioGroup from "../common/form/RadioGroup";
import NoticeCardContainer from "../common/noticeCard/NoticeCardContainer";

const radioOptions = {
    firstFloor: ["L", "B1", "3F"],
    firstHeight: ["상", "중", "하"],
    secondFloor: ["L", "B1", "3F"],
    secondHeight: ["상", "중", "하"],
};

const ApplyForm = () => {
    return (
        <>
            <FormWrapper>
                <FormItem>
                    <ItemTitle>성함</ItemTitle>
                    <ItemInput placeholder="성함을 입력해주세요." />
                </FormItem>

                <FormItem>
                    <ItemTitle>학번</ItemTitle>
                    <ItemInput placeholder="학번을 입력해주세요." />
                </FormItem>

                <FormItem>
                    <ItemTitle>1지망</ItemTitle>
                    <ItemRadioContainer>
                        <RadioGroup name="first-floor" options={radioOptions.firstFloor} />
                        <RadioGroup name="first-height" options={radioOptions.firstHeight} />
                    </ItemRadioContainer>
                </FormItem>

                <FormItem>
                    <ItemTitle>2지망</ItemTitle>
                    <ItemRadioContainer>
                        <RadioGroup name="second-floor" options={radioOptions.secondFloor} />
                        <RadioGroup name="second-height" options={radioOptions.secondHeight} />
                    </ItemRadioContainer>
                </FormItem>

                <FormItem>
                    * 배정 위치는 다수의 의견 수집으로 배정되므로, 상황에 따라 희망 위치 반영 여부가 달라질 수 있습니다.
                </FormItem>
                <FormItem>* 학생회비 납부자 우선 배정 후, 미납부자 배정이 진행됩니다.</FormItem>
            </FormWrapper>
            <Button buttonContent="신청하기" />
            <NoticeCardContainer />
        </>
    );
};

export default ApplyForm;
