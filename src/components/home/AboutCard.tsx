import Angle from "@/assets/angle.svg";

import { AboutCardWrapper } from "./AboutCard.style";

const AboutCard = () => {
    return (
        <AboutCardWrapper>
            <p>사물함 유의 사항 안내</p>
            <img src={Angle} alt="angle" />
        </AboutCardWrapper>
    );
};

export default AboutCard;
