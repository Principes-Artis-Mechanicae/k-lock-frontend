import { mobile, tablet } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const CardContainerWrapper = styled.div`
    ${place_center};
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden;
    gap: 25px;

    & > :first-of-type {
        margin-left: 40px;
    }

    & > :last-of-type {
        margin-right: 40px;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    ${tablet} {
        justify-content: start;
    }
    ${mobile} {
        justify-content: start;
    }
`;
