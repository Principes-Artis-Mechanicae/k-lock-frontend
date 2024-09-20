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
    padding-bottom: 50px;
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
`;

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: 400;
    color: #4a4a4a;
    gap: 5px;
`;
