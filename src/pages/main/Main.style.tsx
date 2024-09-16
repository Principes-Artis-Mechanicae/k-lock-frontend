import { mobile, tablet } from "@/styles/breakpoint";
import { place_center, vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const MainPageLayout = styled.main`
    width: 100%;
    min-height: 100vh;
`;

export const MainPageLogoSection = styled.div`
    ${place_center};
    flex-direction: column;

    width: 100%;
    height: 55vh;
    margin-bottom: -5vh;
    gap: 15px;
    padding: 0px 60px;

    background-color: #861c1c;

    ${tablet} {
        align-items: start;
    }
    ${mobile} {
        align-items: start;
    }
`;

export const MainTitle = styled.h1`
    display: flex;
    flex-direction: row;

    gap: 15px;

    font-size: 55px;
    font-weight: 600;
    color: #fff;

    cursor: pointer;

    ${tablet} {
        font-size: 48px;
        flex-direction: column;
    }
    ${mobile} {
        font-size: 28px;
        flex-direction: column;
    }
`;

export const MainSubtitle = styled.h2`
    ${place_center};

    font-size: 45px;
    font-weight: 700;
    color: #9a2828;

    padding: 4px 30px 0 30px;
    border-radius: 40px;

    background-color: #fff;
    cursor: pointer;

    ${tablet} {
        font-size: 48px;
    }
    ${mobile} {
        font-size: 28px;
    }
`;

export const MainPageCardSection = styled.div`
    ${vertical_center};

    width: 100%;
    height: 50vh;

    padding: 10px 0;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    gap: 20px;

    background-color: #fff;
`;
