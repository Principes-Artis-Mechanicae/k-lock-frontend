import { mobile } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const NavAsideWrapper = styled.div`
    position: absolute;
    top: 0;

    ${place_center};
    display: none;

    width: 100%;
    height: 80px;
`;

export const NavAsideTitle = styled.div`
    ${place_center};

    padding-top: 3px;
    font-size: 30px;
    font-weight: 400;
    cursor: pointer;

    ${mobile} {
        font-size: 24px;
    }
`;

export const NavAsideImg = styled.img`
    position: relative;
`;
