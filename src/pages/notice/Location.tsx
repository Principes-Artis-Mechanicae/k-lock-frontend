import UserPageLayout from "@/components/common/layout/UserPageLayout";

import { LocationContent } from "./NoticeForm";

export default function Location() {
    return (
        <UserPageLayout
            title="사물함 위치 안내"
            subTitle="사물함 위치를 참고해주시길 바랍니다"
            Content={<LocationContent />}
        />
    );
}
