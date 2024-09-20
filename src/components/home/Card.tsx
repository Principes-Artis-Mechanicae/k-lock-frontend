import { useNavigate } from "react-router-dom";

import Arrow from "@/assets/arrow.svg";

import { CardDuration, CardWrapper, CardTitle, CardDescription, CardButton } from "./Card.style";

interface CardProps {
    duration: string;
    title: string;
    description: string;
    navigationPath: string;
}

const Card: React.FC<CardProps> = ({ duration, title, description, navigationPath }) => {
    const navigate = useNavigate();

    const onClickNavigate = () => {
        navigate(navigationPath);
        window.scrollTo(0, 0);
    };

    return (
        <CardWrapper onClick={onClickNavigate}>
            <CardDuration>{duration}</CardDuration>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardButton>
                <img src={Arrow} alt="arrow" />
            </CardButton>
        </CardWrapper>
    );
};

export default Card;
