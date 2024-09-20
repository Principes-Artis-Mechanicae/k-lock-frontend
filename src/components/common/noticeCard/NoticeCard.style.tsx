import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const NoticeCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-width: 280px;
    aspect-ratio: 6/1;

    padding: 0 30px;

    border-radius: 20px;
    background-color: #e9e9e9;

    font-size: 18px;
    color: #4b4b4b;

    cursor: pointer;

    ${mobile} {
        min-width: 200px;
        font-size: 15px;
        padding: 0 20px;
    }
`;
