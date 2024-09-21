import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const RadioLabel = styled.label`
    display: inline-flex;
    position: relative;
    gap: 5px;
    align-items: center;

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        font-size: 20px;
        font-weight: 600;
        color: #a5a5a5;

        ${mobile} {
            font-size: 16px;
        }
    }
`;

export const Radio = styled.input`
    appearance: none;
    display: inline-block;
    width: 45px;
    height: 45px;

    background-color: #fff;
    border-radius: 50%;

    &:checked {
        background-color: #9a2828;
    }
    &:checked + span {
        color: #ffffff; /* 선택된 상태의 텍스트 색상 */
    }

    ${mobile} {
        width: 35px;
        height: 35px;
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;
