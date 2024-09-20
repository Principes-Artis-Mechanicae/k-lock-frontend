import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
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

interface ButtonProps {
    buttonContent: string;
}

const Button: React.FC<ButtonProps> = ({ buttonContent }) => {
    return <ButtonStyled>{buttonContent}</ButtonStyled>;
};

export default Button;
