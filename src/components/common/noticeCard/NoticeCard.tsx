import { useNavigate } from "react-router-dom";

import Angle from "@/assets/angle.svg";

import { NoticeCardWrapper } from "./NoticeCard.style";

interface NoticeCardProps {
    title: string;
    navigationPath: string;
}

const NoticeCard: React.FC<NoticeCardProps> = ({ title, navigationPath }) => {
    const navigate = useNavigate();

    const onClickNavigate = () => {
        navigate(navigationPath);
        window.scrollTo(0, 0);
    };

    return (
        <NoticeCardWrapper onClick={onClickNavigate}>
            <p>{title}</p>
            <img src={Angle} alt="angle" />
        </NoticeCardWrapper>
    );
};

export default NoticeCard;
