import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const FormWrapper = styled.div`
    padding: 35px 50px;

    display: flex;
    flex-direction: column;
    gap: 35px;

    max-width: 600px;

    background-color: #f3f3f3;
    border-radius: 20px;

    ${mobile} {
        padding: 30px;
        min-width: 300px;
    }
`;

export const FormItem = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    font-size: 14px;
    font-weight: 400;

    color: #5c5c5c;
`;

export const ItemTitle = styled.div`
    height: 100%;
    font-size: 20px;
    font-weight: 600;

    color: #9a2828;

    ${mobile} {
        font-size: 18px;
    }
`;

export const ItemContent = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    font-size: 18px;
`;

export const ItemInput = styled.input`
    width: 240px;
    height: 40px;

    padding: 5px 20px;
    font-size: 15px;
    border-radius: 20px;

    &:focus {
        outline: 2px solid #9a2828;
    }

    ${mobile} {
        width: 180px;
    }
`;

export const ItemTextArea = styled.textarea`
    width: 400px;
    height: 80px;

    resize: none;

    padding: 10px 20px;
    font-size: 15px;
    border-radius: 20px;

    &:focus {
        outline: 2px solid #9a2828;
    }

    ${mobile} {
        max-width: 250px;
    }
`;

export const ItemButton = styled.button`
    min-width: 200px;

    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 20px;

    font-size: 20px;
    font-weight: 600;
    color: #fff;

    background-color: #9a2828;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    ${mobile} {
        font-size: 16px;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: translateY(0);
        box-shadow: none;
    }
`;

export const ItemRadioContainer = styled.div`
    display: flex;
    gap: 45px;
    align-items: center;

    ${mobile} {
        flex-direction: column;
        gap: 20px;
    }
`;
