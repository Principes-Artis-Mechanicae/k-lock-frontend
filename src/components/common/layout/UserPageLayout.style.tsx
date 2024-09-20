import { mobile } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const UserPageLayoutWrapper = styled.div`
    ${place_center};
    flex-direction: column;
    gap: 35px;

    padding: 3rem 2rem;
`;

export const UserPageSection = styled.div`
    ${place_center};
    flex-direction: column;
    gap: 15px;
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;

    color: #5c1d1d;

    ${mobile} {
        font-size: 22px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;

    color: #000;

    ${mobile} {
        font-size: 12px;
    }
`;
