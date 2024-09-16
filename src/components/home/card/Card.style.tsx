import { tablet, mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    min-height: 247px;
    aspect-ratio: 380 / 247;

    padding: 36px;
    gap: 9px;

    border-radius: 40px;
    color: #fff;

    background-color: #9a2828;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #861c1c;
    }

    ${tablet} {
        padding: 20px 30px;
        aspect-ratio: 3/2;
    }
    ${mobile} {
        padding: 20px 30px;
        min-height: 165px;
    }
`;

export const CardDuration = styled.div`
    border: 3px solid #fff;

    width: fit-content;

    padding: 5px 15px;
    margin-bottom: 9px;

    border-radius: 20px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    font-size: 18px;

    ${mobile} {
        font-size: 16px;
    }
`;

export const CardTitle = styled.div`
    font-size: 24px;
    font-weight: 600;

    ${mobile} {
        font-size: 18px;
    }
`;

export const CardDescription = styled.div`
    font-size: 20px;
    width: 200px;

    ${mobile} {
        font-size: 16px;
    }
`;

export const CardButton = styled.div`
    opacity: 0;
    position: absolute; // CardWrapper의 위치를 기준으로 설정

    bottom: 10px;
    right: 15px;
    width: fit-content;

    transition: 0.3s ease-in-out;

    ${CardWrapper}:hover & {
        opacity: 1; // hover 시 보이도록 설정
    }
`;
