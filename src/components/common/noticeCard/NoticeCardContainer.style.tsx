import { mobile } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const NoticeCardContainerWrapper = styled.div`
    ${place_center};
    gap: 30px;
    margin-top: 20px;

    ${mobile} {
        flex-direction: column;
        gap: 10px;
    }
`;
