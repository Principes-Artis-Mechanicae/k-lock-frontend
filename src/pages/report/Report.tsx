import { useSelector } from "react-redux";

import UserPageLayout from "@/components/common/layout/UserPageLayout";
import Modal from "@/components/common/modal/Modal";

import ReportIcon from "@/assets/icons/report.svg";

import ReportForm from "./ReportForm";
import { RootState } from "@/store/store";

export default function Report() {
    const { isModalOpened } = useSelector((state: RootState) => state.ui);

    return (
        <>
            {isModalOpened && <Modal />}
            <UserPageLayout
                title="사물함 고장 신고 및 변경 신청"
                subTitle="고장 신고 및 재신청을 위해 아래 항목들을 기입해주세요."
                icon={ReportIcon}
                Content={<ReportForm />}
            />
        </>
    );
}
