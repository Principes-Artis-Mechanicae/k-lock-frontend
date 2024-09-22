import { mobile, tablet } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const CardContainerWrapper = styled.div`
    ${place_center};
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden;

    padding: 0 10px;
    padding-top: 10px;

    min-height: 200px;
    gap: 25px;

    ::-webkit-scrollbar {
        display: none;
    }

    ${mobile} {
        justify-content: start;
        scroll-snap-type: x mandatory;
    }

    ${tablet} {
        justify-content: start;
        &>: first-of-type {
            margin-left: 10px;
        }
        &>: last-of-type {
            margin-right: 10px;
        }
        scroll-snap-type: x mandatory;
    }
`;
