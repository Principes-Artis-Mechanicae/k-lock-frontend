import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
    position: absolute;
    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;

    padding: 10px 120px;
    gap: 24px;

    background-color: transparent;

    color: #fff;
`;

export const HeaderTitle = styled.div`
    padding-top: 3px;

    font-size: 30px;
    font-weight: 400;
    cursor: pointer;
`;

export const Divider = styled.div`
    width: 1px;
    height: 30px;

    background-color: #fff;
`;
