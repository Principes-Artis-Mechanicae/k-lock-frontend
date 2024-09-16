import Card from "./Card";
import { CardContainerWrapper } from "./CardContainer.style";
import CardIndex from "./CardIndex";

const CardContainer = () => {
    return (
        <>
            <CardContainerWrapper>
                <Card />
                <Card />
                <Card />
            </CardContainerWrapper>
            <CardIndex />
        </>
    );
};

export default CardContainer;
