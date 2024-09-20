import { useLocation, useNavigate } from "react-router-dom";

import AsideBlack from "@/assets/header/aside-black.svg";
import AsideWhite from "@/assets/header/aside-white.svg";
import LogoColor from "@/assets/header/logo-color.svg";
import LogoWhite from "@/assets/header/logo-white.svg";

import { NavBarWrapper, Divider, NavBarTitle, NavBarItems, NavBarBlank, NavAsideButton } from "./NavBar.style";
import NavItem from "./NavItem";

const NavBar = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    const navItemData = [
        { to: "/apply", text: "사물함 신청 및 추가 신청" },
        { to: "/check", text: "사물함 배정 조회" },
        { to: "/report", text: "사물함 고장 신고 및 변경 신청" },
    ];

    const navigate = useNavigate();
    const onClickNavigate = () => {
        navigate("/");
        window.scrollTo(0, 0);
    };

    return (
        <NavBarWrapper isMainPage={isMainPage}>
            <NavAsideButton src={isMainPage ? AsideWhite : AsideBlack} alt="aside-button" />
            <img src={isMainPage ? LogoWhite : LogoColor} alt="logo" />
            <NavBarTitle onClick={onClickNavigate}>KLOCK</NavBarTitle>
            <NavBarItems>
                <Divider isMainPage={isMainPage} />
                {navItemData.map((navItem, index) => (
                    <NavItem key={index} to={navItem.to} text={navItem.text} isMainPage={isMainPage} />
                ))}
            </NavBarItems>
            <NavBarBlank />
        </NavBarWrapper>
    );
};

export default NavBar;
