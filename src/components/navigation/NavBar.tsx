import { useLocation } from "react-router-dom";

import LogoColor from "@/assets/logo-color.svg";
import LogoWhite from "@/assets/logo-white.svg";

import { NavBarWrapper, Divider, NavBarTitle, NavBarItems, NavBarBlank } from "./NavBar.style";

const NavBar = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    return (
        <NavBarWrapper style={{ color: isMainPage ? "#fff" : "#000" }}>
            <img src={isMainPage ? LogoWhite : LogoColor} alt="logo" />
            <NavBarTitle>KNU CSE</NavBarTitle>
            <NavBarItems>
                <Divider style={{ backgroundColor: isMainPage ? "#fff" : "#000" }} />
                <p>사물함 신청 및 추가 신청</p>
                <p>사물함 조회</p>
                <p>사물함 고장 신고 및 변경 신청</p>
            </NavBarItems>
            <NavBarBlank />
        </NavBarWrapper>
    );
};

export default NavBar;
