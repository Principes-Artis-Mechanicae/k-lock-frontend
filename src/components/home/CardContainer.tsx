import { useMemo } from "react";
import { useSelector } from "react-redux";

import { addOneDay, dateValueFormatter } from "@/utils/utils";

import Card from "./Card";
import { CardContainerWrapper } from "./CardContainer.style";
import { RootState } from "@/store/store";

const CardContainer = () => {
    const { firstApplyStartDate, firstApplyEndDate, semesterEndDate, dateType } = useSelector(
        (state: RootState) => state.period,
    );

    const additionalApplyStartDate = useMemo(() => addOneDay(firstApplyEndDate), [firstApplyEndDate]);

    const cardData = useMemo(() => {
        const applyDuration =
            dateType === "additionalApply"
                ? `${dateValueFormatter(additionalApplyStartDate)} - ${dateValueFormatter(semesterEndDate)}`
                : `${dateValueFormatter(firstApplyStartDate)} - ${dateValueFormatter(firstApplyEndDate)}`;

        return [
            {
                duration: applyDuration,
                title: dateType === "additionalApply" ? "사물함 추가 신청" : "사물함 신청",
                description: "KLOCKER Application & Additional Application",
                navigationPath: "/apply",
            },
            {
                duration: `${dateValueFormatter(additionalApplyStartDate)} - ${dateValueFormatter(semesterEndDate)}`,
                title: "사물함 배정 조회",
                description: "KLOCKER Assignment Information",
                navigationPath: "/check",
            },
            {
                duration: `${dateValueFormatter(additionalApplyStartDate)} - ${dateValueFormatter(semesterEndDate)}`,
                title: "사물함 고장 신고 및 변경 신청",
                description: "KLOCKER Malfunction & Change Request",
                navigationPath: "/report",
            },
        ];
    }, [additionalApplyStartDate, firstApplyStartDate, firstApplyEndDate, semesterEndDate, dateType]);

    return (
        <CardContainerWrapper>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    duration={card.duration}
                    title={card.title}
                    description={card.description}
                    navigationPath={card.navigationPath}
                />
            ))}
        </CardContainerWrapper>
    );
};

export default CardContainer;
