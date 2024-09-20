import UserPageLayout from "@/components/common/layout/UserPageLayout";
import ReportForm from "@/components/report/ReportForm";

import ReportIcon from "@/assets/icons/report.svg";

export default function Report() {
    return (
        <UserPageLayout
            title="사물함 고장 신고 및 변경 신청"
            subTitle="고장 신고 및 재신청을 위해 아래 항목들을 기입해주세요."
            icon={ReportIcon}
            Content={<ReportForm />}
        />
    );
}
