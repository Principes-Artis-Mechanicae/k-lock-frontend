import { Route, Routes } from "react-router-dom";

import { PageLayout } from "@/components/common/layout/PageLayout";

import Apply from "@/pages/apply/Apply";
import Check from "@/pages/check/Check";
import Main from "@/pages/main/Main";
import About from "@/pages/notice/About";
import Location from "@/pages/notice/Location";
import Report from "@/pages/report/Report";

import { AuthGuard } from "./components/common/guard/AuthGuard";
import { DateGuard } from "./components/common/guard/DateGuard";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Main />} />

            <Route path="/" element={<PageLayout />}>
                <Route path="notice">
                    <Route path="about" element={<About />} />
                    <Route path="location" element={<Location />} />
                </Route>

                <Route
                    path="apply"
                    element={
                        <DateGuard isApply={true}>
                            <Apply />
                        </DateGuard>
                    }
                />
                <Route
                    path="check"
                    element={
                        <DateGuard>
                            <AuthGuard>
                                <Check />
                            </AuthGuard>
                        </DateGuard>
                    }
                />
                <Route
                    path="report"
                    element={
                        <DateGuard>
                            <AuthGuard>
                                <Report />
                            </AuthGuard>
                        </DateGuard>
                    }
                />
            </Route>
        </Routes>
    );
};
