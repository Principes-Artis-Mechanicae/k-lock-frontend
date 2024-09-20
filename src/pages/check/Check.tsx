import CheckForm from "@/components/check/CheckForm";
import UserPageLayout from "@/components/common/layout/UserPageLayout";

import CheckIcon from "@/assets/icons/check.svg";

export default function Check() {
    return (
        <UserPageLayout
            title="사물함 배정 조회"
            subTitle="사물함 배정 결과입니다."
            icon={CheckIcon}
            Content={<CheckForm />}
        />
    );
}
