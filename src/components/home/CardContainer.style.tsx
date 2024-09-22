import { mobile, tablet } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const CardContainerWrapper = styled.div`
    ${place_center};
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden;

    padding-top: 10px;

    min-height: 200px;
    gap: 25px;

    ::-webkit-scrollbar {
        display: none;
    }

    ${mobile} {
        justify-content: start;
        &>: first-of-type {
            margin-left: 200px;
        }
        &>: last-of-type {
            margin-right: 300px;
        }
        scroll-snap-type: x mandatory;
    }

    ${tablet} {
        justify-content: start;
        &>: first-of-type {
            margin-left: 300px;
        }
        &>: last-of-type {
            margin-right: 300px;
        }
        scroll-snap-type: x mandatory;
    }
`;
