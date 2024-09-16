import { FooterWrapper, FooterContainer, FooterContainerBody, FooterItems } from "./Footer.style";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterContainerBody>
                    <p>주관</p>
                    <FooterItems>
                        <p>경북대학교 컴퓨터학부 학생회 집행부</p>
                    </FooterItems>
                </FooterContainerBody>
                <FooterContainerBody>
                    <p>문의</p>
                    <FooterItems>
                        <p>kakaotalk: smy4734</p>
                    </FooterItems>
                </FooterContainerBody>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;
