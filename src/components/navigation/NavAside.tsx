import { useLocation } from "react-router-dom";

import LogoColor from "@/assets/logo-color.svg";
import LogoWhite from "@/assets/logo-white.svg";

import { NavAsideWrapper, NavAsideTitle, NavAsideImg } from "./NavAside.style";

const NavAside = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    return (
        <NavAsideWrapper style={{ color: isMainPage ? "#fff" : "#000" }}>
            <NavAsideImg src={isMainPage ? LogoWhite : LogoColor} alt="logo" />
            <NavAsideTitle>KNU CSE</NavAsideTitle>
        </NavAsideWrapper>
    );
};

export default NavAside;
