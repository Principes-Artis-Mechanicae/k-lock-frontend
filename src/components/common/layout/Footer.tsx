import { FooterWrapper, FooterContainer, FooterContainerBody, FooterItems, FooterCopyRight } from "./Footer.style";

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
                <FooterCopyRight>
                    © 2024
                    <a href="https://www.instagram.com/minn._n__" target="_blank" rel="noopener noreferrer">
                        @minn._n__
                    </a>
                    <a href="https://www.instagram.com/_bbong8" target="_blank" rel="noopener noreferrer">
                        @_bbong8
                    </a>
                    <a href="https://www.instagram.com/chxisoei_" target="_blank" rel="noopener noreferrer">
                        @chxisoei_
                    </a>
                    . All rights reserved.
                </FooterCopyRight>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;
