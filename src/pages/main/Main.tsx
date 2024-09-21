import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "@/components/common/layout/Footer";
import Header from "@/components/common/layout/Header";
import NoticeCardContainer from "@/components/common/noticeCard/NoticeCardContainer";
import CardContainer from "@/components/home/CardContainer";

import { fetchAndSetPeriod } from "@/services/form/service";

import { MainPageLayout, MainPageLogoSection, MainPageCardSection, MainTitle, MainSubtitle } from "./Main.style";
import { RootState } from "@/store/store";

export default function Main() {
    const dispatch = useDispatch();
    const periodState = useSelector((state: RootState) => state.period);

    useEffect(() => {
        if (!periodState.applyFormId) {
            fetchAndSetPeriod(dispatch);
        }
    }, [periodState.applyFormId, dispatch]);

    return (
        <>
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
                        {periodState.applyFormId ? (
                            <CardContainer />
                        ) : (
                            <div style={{ textAlign: "center" }}>로딩중...</div>
                        )}
                        <NoticeCardContainer />
                    </MainPageCardSection>
                </MainPageLayout>
                <Footer />
            </>
        </>
    );
}
