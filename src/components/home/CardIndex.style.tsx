import { mobile, tablet } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const CardIndexContainer = styled.div`
    ${place_center};
    display: none;
    gap: 5px;

    ${tablet} {
        display: flex;
    }

    ${mobile} {
        display: flex;
    }
`;

export const IndexCircle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d9d9d9;
`;
