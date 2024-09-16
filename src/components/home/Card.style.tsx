import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 380px;
    height: 245px;

    padding: 36px;
    gap: 9px;

    border-radius: 40px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: #fff;

    background-color: #9a2828;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03) translateY(-8px);

        background-color: #861c1c;
        margin: 0 10px;
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
`;

export const CardTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

export const CardDescription = styled.div`
    font-size: 20px;
    width: 200px;
`;

export const CardButton = styled.div`
    opacity: 0;

    position: relative;
    left: 90%;
    width: fit-content;

    transition: 0.3s ease-in-out;

    ${CardWrapper}:hover & {
        opacity: 1;
    }
`;
