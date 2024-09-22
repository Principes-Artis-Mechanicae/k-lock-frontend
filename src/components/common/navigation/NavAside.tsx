import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { useNavAside } from "@/hooks/useNavAside";

import CloseBlack from "@/assets/close-black.svg";

import {
    NavAsideBackDrop,
    NavAsideContainer,
    NavAsideWrapper,
    NavAsideItem,
    NavAsideTitle,
    NavAsideSubTitle,
    NavAsideDivider,
    NavAsideController,
} from "./NavAside.style";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

const navAsideItems = [
    {
        title: "사물함 신청 및 추가 신청",
        subTitle: `KLOCKER Application`,
        to: "/apply",
    },
    {
        title: "사물함 배정 안내",
        subTitle: "KLOCKER Assignment Information",
        to: "/check",
    },
    {
        title: "사물함 고장 신고 및 변경 신청",
        subTitle: "KLOCKER Malfunction & Change Request",
        to: "/report",
    },
];

const NavAside = () => {
    const dispatch: RootDispatch = useDispatch();

    const { backdropRef, navAsideRef } = useNavAside();

    const handleRoute = useCallback(() => {
        dispatch(uiActions.closeNavAside());
    }, [dispatch]);

    return (
        <>
            <NavAsideBackDrop ref={backdropRef} />
            <NavAsideWrapper ref={navAsideRef}>
                <NavAsideContainer>
                    <NavAsideController onClick={handleRoute}>
                        <img src={CloseBlack} alt="close" />
                    </NavAsideController>
                    {navAsideItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <NavLink to={item.to} style={{ width: "100%" }} onClick={handleRoute}>
                                <NavAsideItem>
                                    <NavAsideTitle>{item.title}</NavAsideTitle>
                                    <NavAsideSubTitle>{item.subTitle}</NavAsideSubTitle>
                                </NavAsideItem>
                            </NavLink>
                            <NavAsideDivider />
                        </React.Fragment>
                    ))}
                </NavAsideContainer>
            </NavAsideWrapper>
        </>
    );
};

export default NavAside;
