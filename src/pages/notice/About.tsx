import UserPageLayout from "@/components/common/layout/UserPageLayout";

import { AboutContent } from "./NoticeForm";

export default function About() {
    return (
        <UserPageLayout
            title="사물함 유의사항 안내"
            subTitle="원활한 사물함 관리를 위해 참고해주시기 바랍니다."
            Content={<AboutContent />}
        />
    );
}
