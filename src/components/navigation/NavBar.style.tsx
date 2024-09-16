import { mobile, tablet } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const NavBarWrapper = styled.header`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;

    padding: 10px 120px;
    gap: 24px;

    background-color: transparent;

    color: #fff;

    ${tablet} {
        justify-content: center;
        gap: 5px;
    }

    ${mobile} {
        justify-content: center;
        gap: 5px;
    }
`;

export const NavBarLogo = styled.img`
    position: relative;
    left: transformX(-50%);
`;

export const NavBarTitle = styled.div`
    min-width: 100px;
    padding-top: 3px;

    font-size: 30px;
    font-weight: 400;
    cursor: pointer;

    ${mobile} {
        font-size: 24px;
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 30px;

    background-color: #fff;
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
