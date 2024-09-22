import { useCallback } from "react";
import { useDispatch } from "react-redux";

import AsideBlack from "@/assets/header/aside-black.svg";
import AsideWhite from "@/assets/header/aside-white.svg";

import { NavAsideButton as StyledButton } from "./NavAside.style";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

const NavAsideButton = () => {
    const isMainPage = location.pathname === "/";
    const dispatch: RootDispatch = useDispatch();

    const handleAsideBtnClick = useCallback(() => {
        dispatch(uiActions.toggleNavAside());
    }, [dispatch]);

    return (
        <StyledButton onClick={handleAsideBtnClick}>
            <img src={isMainPage ? AsideWhite : AsideBlack} alt="aside" />
        </StyledButton>
    );
};

export default NavAsideButton;
