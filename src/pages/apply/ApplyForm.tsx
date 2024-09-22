import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    FormWrapper,
    FormItem,
    ItemTitle,
    ItemInput,
    ItemRadioContainer,
    ItemButton,
} from "@/components/common/form/Form.style";

import { lockerValueChanger } from "@/utils/utils";

import RadioGroup from "../../components/common/form/RadioGroup";
import NoticeCardContainer from "../../components/common/noticeCard/NoticeCardContainer";
import { formActions } from "@/store/slice/form.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch, RootState } from "@/store/store";

const radioOptions = {
    floor: ["L", "B1", "3F"],
    height: ["상", "중", "하"],
};

const ApplyForm = () => {
    const dispatch: RootDispatch = useDispatch();
    const { authStudentNumber, authStudentName } = useSelector((state: RootState) => state.auth);
    const { studentName, studentNumber, firstFloor, firstHeight, secondFloor, secondHeight } = useSelector(
        (state: RootState) => state.form,
    );

    useEffect(() => {
        return () => {
            dispatch(formActions.deleteFormData());
            dispatch(uiActions.hideModal());
            if (authStudentName && authStudentNumber) {
                dispatch(formActions.setStudentName(authStudentName));
                dispatch(formActions.setStudentNumber(authStudentNumber));
            }
        };
    }, [authStudentName, authStudentNumber, dispatch]);

    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (field === "studentName") {
                dispatch(formActions.setStudentName(e.target.value));
            } else if (field === "studentNumber") {
                dispatch(formActions.setStudentNumber(e.target.value));
            }
        },
        [dispatch],
    );

    const handleRadioChange = useCallback(
        (name: "first-floor" | "first-height" | "second-floor" | "second-height", value: string) => {
            const actionMap = {
                "first-floor": formActions.setFirstFloor,
                "first-height": formActions.setFirstHeight,
                "second-floor": formActions.setSecondFloor,
                "second-height": formActions.setSecondHeight,
            };

            const action = actionMap[name];
            if (action) {
                dispatch(action(lockerValueChanger[value]));
            }
        },
        [dispatch],
    );

    const onClickApply = useCallback(() => {
        if (!studentName || !studentNumber || !firstFloor || !firstHeight || !secondFloor || !secondHeight) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        dispatch(uiActions.setModalType("applyConfirm"));
        dispatch(uiActions.showModal());
    }, [studentName, studentNumber, firstFloor, firstHeight, secondFloor, secondHeight, dispatch]);

    return (
        <>
            <FormWrapper>
                <FormItem>
                    <ItemTitle>성함</ItemTitle>
                    <ItemInput
                        placeholder="성함을 입력해주세요."
                        value={studentName}
                        onChange={handleInputChange("studentName")}
                    />
                </FormItem>

                <FormItem>
                    <ItemTitle>학번</ItemTitle>
                    <ItemInput
                        placeholder="학번을 입력해주세요."
                        value={studentNumber}
                        onChange={handleInputChange("studentNumber")}
                    />
                </FormItem>

                <FormItem>
                    <ItemTitle>1지망</ItemTitle>
                    <ItemRadioContainer>
                        <RadioGroup
                            name="first-floor"
                            options={radioOptions.floor}
                            selectedOption={firstFloor}
                            onChange={(value) => handleRadioChange("first-floor", value)}
                        />
                        <RadioGroup
                            name="first-height"
                            options={radioOptions.height}
                            selectedOption={firstHeight}
                            onChange={(value) => handleRadioChange("first-height", value)}
                        />
                    </ItemRadioContainer>
                </FormItem>

                <FormItem>
                    <ItemTitle>2지망</ItemTitle>
                    <ItemRadioContainer>
                        <RadioGroup
                            name="second-floor"
                            options={radioOptions.floor}
                            selectedOption={secondFloor}
                            onChange={(value) => handleRadioChange("second-floor", value)}
                        />
                        <RadioGroup
                            name="second-height"
                            options={radioOptions.height}
                            selectedOption={secondHeight}
                            onChange={(value) => handleRadioChange("second-height", value)}
                        />
                    </ItemRadioContainer>
                </FormItem>
                <FormItem>
                    * 배정 위치는 다수의 의견 수집으로 배정되므로, 상황에 따라 희망 위치 반영 여부가 달라질 수 있습니다.
                </FormItem>
                <FormItem>* 학생회비 납부자 우선 배정 후, 미납부자 배정이 진행됩니다.</FormItem>
            </FormWrapper>
            <ItemButton onClick={onClickApply}>신청하기</ItemButton>
            <NoticeCardContainer />
        </>
    );
};

export default ApplyForm;
