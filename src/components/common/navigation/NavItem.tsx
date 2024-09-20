import { useNavigate } from "react-router-dom";

import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const NavItemWrapper = styled.div`
    padding-top: 3px;
    display: flex;
    flex-direction: column;
`;

export const NavItemText = styled.div`
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;

    ${mobile} {
        font-size: 16px;
    }
`;

export const NavItemBottomLine = styled.div<{ isMainPage: boolean }>`
    display: flex;
    width: 0;
    height: 2px;
    transition: width 1s;
    background-color: ${({ isMainPage }) => (isMainPage ? "#fff" : "#9a2828")};

    ${NavItemWrapper}:hover & {
        width: 100%;
    }
`;

interface NavItemProps {
    to: string;
    text: string;
    isMainPage: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, text, isMainPage }) => {
    const navigate = useNavigate();
    const onClickNavigate = () => {
        navigate(to);
        window.scrollTo(0, 0);
    };

    return (
        <NavItemWrapper onClick={onClickNavigate}>
            <NavItemText>{text}</NavItemText>
            <NavItemBottomLine isMainPage={isMainPage} />
        </NavItemWrapper>
    );
};

export default NavItem;
