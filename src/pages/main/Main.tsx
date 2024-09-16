import Footer from "@/components/common/layout/Footer";
import Header from "@/components/common/layout/Header";
import AboutCardContainer from "@/components/home/AboutCardContainer";
import CardContainer from "@/components/home/CardContainer";

import { MainPageLayout, MainPageLogoSection, MainPageCardSection, MainTitle, MainSubtitle } from "./Main.style";

export default function Main() {
    return (
        <>
            <Header />
            <MainPageLayout>
                <MainPageLogoSection>
                    <MainTitle>
                        <p>KNU CSE</p>
                        <p>locker services</p>
                    </MainTitle>
                    <MainSubtitle>:KLOCK</MainSubtitle>
                </MainPageLogoSection>

                <MainPageCardSection>
                    <CardContainer />
                    <AboutCardContainer />
                </MainPageCardSection>
            </MainPageLayout>
            <Footer />
        </>
    );
}
