import { useLocation } from "react-router-dom";

import LogoColor from "@/assets/logo-color.svg";
import LogoWhite from "@/assets/logo-white.svg";

import { HeaderWrapper, Divider, HeaderTitle } from "./Header.style";

const Header = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    return (
        <HeaderWrapper style={{ color: isMainPage ? "#fff" : "#000" }}>
            <img src={isMainPage ? LogoWhite : LogoColor} alt="logo" />
            <HeaderTitle>KNU CSE</HeaderTitle>
            <Divider style={{ backgroundColor: isMainPage ? "#fff" : "#000" }} />
            <p>사물함 신청 및 추가 신청</p>
            <p>사물함 조회</p>
            <p>사물함 고장 신고 및 변경 신청</p>
        </HeaderWrapper>
    );
};

export default Header;
