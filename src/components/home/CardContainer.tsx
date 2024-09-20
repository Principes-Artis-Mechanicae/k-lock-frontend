import Card from "./Card";
import { CardContainerWrapper } from "./CardContainer.style";

// import CardIndex from "./CardIndex";

const CardContainer = () => {
    const cardData = [
        {
            duration: "Always",
            title: "사물함 신청 및 추가 신청",
            description: "KLOCKER Application & Additional Application",
            navigationPath: "/apply",
        },
        {
            duration: "Seasonal",
            title: "사물함 배정 조회",
            description: "KLOCKER Assignment Information",
            navigationPath: "/check",
        },
        {
            duration: "Monthly",
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
            {/* <CardIndex /> */}
        </>
    );
};

export default CardContainer;
