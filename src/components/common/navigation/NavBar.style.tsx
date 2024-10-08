import { mobile, tablet } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const NavBarWrapper = styled.header<{ isMainPage: boolean }>`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;

    padding: 10px 120px;
    gap: 24px;

    background-color: transparent;

    color: ${({ isMainPage }) => (isMainPage ? "#fff" : "#000")};

    ${tablet} {
        justify-content: center;
        gap: 5px;
    }

    ${mobile} {
        height: 60px;
        justify-content: center;
        gap: 5px;
    }
`;

export const NavBarLogo = styled.img`
    position: relative;
    left: transformX(-50%);
`;

export const NavBarTitle = styled.div`
    min-width: 80px;
    padding-top: 3px;

    text-align: center;

    font-size: 30px;
    font-weight: 400;
    cursor: pointer;

    ${mobile} {
        font-size: 22px;
    }
`;

export const Divider = styled.div<{ isMainPage: boolean }>`
    width: 1px;
    height: 30px;

    background-color: ${({ isMainPage }) => (isMainPage ? "#fff" : "#000")};
`;

export const NavBarItems = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    ${tablet} {
        display: none;
    }
    ${mobile} {
        display: none;
    }
`;

export const NavBarBlank = styled.div`
    display: flex;
    width: 37px;
`;
