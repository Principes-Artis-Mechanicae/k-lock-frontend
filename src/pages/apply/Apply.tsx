import ApplyForm from "@/components/apply/ApplyForm";
import UserPageLayout from "@/components/common/layout/UserPageLayout";

import ApplyIcon from "@/assets/icons/apply.svg";

export default function Apply() {
    return (
        <UserPageLayout
            title="사물함 신청 및 추가 신청"
            subTitle="사물함 신청을 위해 아래 항목들을 기입해주세요."
            icon={ApplyIcon}
            Content={<ApplyForm />}
        />
    );
}
