import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #ececec;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(100%, 1400px);

    margin: 0px auto;
    padding: 20px;
    padding-bottom: 10px;
`;

export const FooterContainerHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FooterContainerBody = styled.div`
    display: flex;
    gap: 20px;
    font-weight: 600;

    color: #868686;
`;

export const FooterCopyRight = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #868686;

    a {
        margin-left: 5px;
        color: #868686;
    }

    ${mobile} {
        font-size: 11px;
    }
`;

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: 400;
    color: #4a4a4a;
    gap: 5px;
`;
