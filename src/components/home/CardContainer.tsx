import Card from "./Card";
import { CardContainerWrapper } from "./CardContainer.style";

const CardContainer = () => {
    return (
        <CardContainerWrapper>
            <Card />
            <Card />
            <Card />
        </CardContainerWrapper>
    );
};

export default CardContainer;
