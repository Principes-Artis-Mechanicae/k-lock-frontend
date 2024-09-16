import { Route, Routes } from "react-router-dom";

import { UserPageLayout } from "@/components/layout/UserPageLayout";

import About from "@/pages/about/About";
import Apply from "@/pages/apply/Apply";
import Main from "@/pages/main/Main";
import MyLocker from "@/pages/myLocker/MyLocker";
import Report from "@/pages/report/Report";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Main />} />

            <Route path="/" element={<UserPageLayout />}>
                <Route path="/about" element={<About />} />
                <Route path="apply" element={<Apply />} />
                <Route path="my-locker" element={<MyLocker />} />
                <Route path="report" element={<Report />} />
            </Route>
        </Routes>
    );
};
