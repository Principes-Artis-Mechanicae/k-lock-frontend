import Arrow from "@/assets/arrow.svg";

import { CardDuration, CardWrapper, CardTitle, CardDescription, CardButton } from "./Card.style";

const Card = () => {
    return (
        <CardWrapper>
            <CardDuration>Always</CardDuration>
            <CardTitle>사물함 배정 안내</CardTitle>
            <CardDescription>KLOCKER Assignment Information</CardDescription>
            <CardButton>
                <img src={Arrow} alt="arrow" />
            </CardButton>
        </CardWrapper>
    );
};

export default Card;
