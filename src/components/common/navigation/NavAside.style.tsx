import { mobile, tablet } from "@/styles/breakpoint";
import { NAV_ASIDE_Z_INDEX } from "@/styles/z-index";

import styled from "@emotion/styled";

export const NavAsideBackDrop = styled.div`
    display: none;
    z-index: ${NAV_ASIDE_Z_INDEX - 1};
    position: fixed;

    width: 100%;
    height: 100vh;

    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    transition: backdrop-filter 0.5s ease-in-out;

    ${tablet} {
        display: block;
    }

    ${mobile} {
        display: block;
    }
`;

export const NavAsideWrapper = styled.aside`
    display: none;
    z-index: ${NAV_ASIDE_Z_INDEX};
    position: fixed;

    margin-left: 0px;
    margin-right: auto;

    width: 90%;
    height: 100vh;

    transform: translateX(0px);
    transition: transform 0.5s ease-in-out;

    ${tablet} {
        display: block;
    }
    ${mobile} {
        display: block;
    }
`;

export const NavAsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
    gap: 20px;

    margin-left: 0px;
    margin-right: auto;

    padding: 120px 40px;

    background-color: #fff;
`;

export const NavAsideItem = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    width: 100%;
    height: 100px;
    gap: 10px;

    text-align: left;
    font-weight: bold;
    color: #000;
`;

export const NavAsideTitle = styled.div`
    font-size: 18px;
    color: #5c1d1d;

    font-weight: bold;
`;

export const NavAsideSubTitle = styled.div`
    font-size: 18px;
    color: #5c1d1d;
    font-weight: 100;
`;

export const NavAsideDivider = styled.div`
    width: 100%;
    height: 1px;

    background-color: #5c1d1d;
`;

export const NavAsideController = styled.button`
    display: block;
    position: absolute;
    top: 80px;
    right: 7px;
    width: 40px;
    height: 40px;
    transform: translate(0, -100%);

    background-color: transparent;

    img {
        width: 18px;
        height: 18px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const NavAsideButton = styled.div`
    display: none;
    position: absolute;
    left: 20px;
    width: 40px;
    height: 40px;

    cursor: pointer;

    img {
        width: 30px;
        height: 20px;
    }

    ${tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ${mobile} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
