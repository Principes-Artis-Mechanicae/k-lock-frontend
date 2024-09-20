import { Route, Routes } from "react-router-dom";

import { PageLayout } from "@/components/common/layout/PageLayout";

import Apply from "@/pages/apply/Apply";
import Check from "@/pages/check/Check";
import Main from "@/pages/main/Main";
import About from "@/pages/notice/About";
import Location from "@/pages/notice/Location";
import Report from "@/pages/report/Report";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Main />} />

            <Route path="/" element={<PageLayout />}>
                <Route path="notice">
                    <Route path="about" element={<About />} />
                    <Route path="location" element={<Location />} />
                </Route>

                <Route path="location" element={<About />} />
                <Route path="apply" element={<Apply />} />
                <Route path="check" element={<Check />} />
                <Route path="report" element={<Report />} />
            </Route>
        </Routes>
    );
};
