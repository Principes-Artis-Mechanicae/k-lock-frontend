import AboutCardContainer from "@/components/home/aboutCard/AboutCardContainer";
import CardContainer from "@/components/home/card/CardContainer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
