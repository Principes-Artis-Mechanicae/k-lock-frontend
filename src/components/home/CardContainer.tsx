import { useSelector } from "react-redux";

import { dateValueFormatter } from "@/utils/utils";

import Card from "./Card";
import { CardContainerWrapper } from "./CardContainer.style";
import { RootState } from "@/store/store";

const CardContainer = () => {
    const periodState = useSelector((state: RootState) => state.period);
    const cardData = [
        {
            duration: `${dateValueFormatter(periodState.firstApplyStartDate)} - ${dateValueFormatter(periodState.firstApplyEndDate)}`,
            title: "사물함 신청 및 추가 신청",
            description: "KLOCKER Application & Additional Application",
            navigationPath: "/apply",
        },
        {
            duration: `${dateValueFormatter(periodState.firstApplyEndDate)} - ${dateValueFormatter(periodState.semesterEndDate)}`,
            title: "사물함 배정 조회",
            description: "KLOCKER Assignment Information",
            navigationPath: "/check",
        },
        {
            duration: `${dateValueFormatter(periodState.firstApplyEndDate)} - ${dateValueFormatter(periodState.semesterEndDate)}`,
            title: "사물함 고장 신고 및 변경 신청",
            description: "KLOCKER Malfunction & Change Request",
            navigationPath: "/report",
        },
    ];

    return (
        <>
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
        </>
    );
};

export default CardContainer;
