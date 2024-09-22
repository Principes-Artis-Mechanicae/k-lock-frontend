import { mobile } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";
import { MODAL_Z_INDEX } from "@/styles/z-index";

import styled from "@emotion/styled";

export const ModalBackDrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: ${MODAL_Z_INDEX};

    width: 100%;
    height: 100vh;

    background-color: #000;
    opacity: 0.5;
`;

export const ModalController = styled.button`
    display: block;
    position: absolute;
    right: 7px;
    width: 40px;
    height: 40px;
    transform: translate(0, -100%);

    background-color: transparent;

    img {
        width: 18px;
        height: 18px;
        display: block;

        margin-left: auto;
        margin-right: 0px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const ModalContainer = styled.div`
    box-sizing: border-box;
    ${place_center}
    flex-direction: column;

    z-index: ${MODAL_Z_INDEX};

    width: 100%;

    border-radius: 20px;
    padding: 20px 40px;

    background-color: #f3f3f3;
`;

export const ModalWrapper = styled.div`
    position: fixed;

    z-index: ${MODAL_Z_INDEX};

    width: 500px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${mobile} {
        width: 320px;
    }
`;

export const ModalTitle = styled.h1`
    text-align: center;
    width: 100%;

    padding: 10px 0;

    margin-bottom: 20px;
    border-bottom: 1.5px solid #9c9696;
    font-size: 22px;
    font-weight: 600;
    color: #9a2828;

    ${mobile} {
        font-size: 20px;
    }
`;

export const ModalContent = styled.div`
    ${place_center}
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: 100%;

    padding: 20px 10px;
`;
