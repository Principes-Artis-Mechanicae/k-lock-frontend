import { useSelector } from "react-redux";

import UserPageLayout from "@/components/common/layout/UserPageLayout";
import Modal from "@/components/common/modal/Modal";

import ApplyIcon from "@/assets/icons/apply.png";

import ApplyForm from "./ApplyForm";
import { RootState } from "@/store/store";

export default function Apply() {
    const { isModalOpened } = useSelector((state: RootState) => state.ui);
    const { dateType, year, semester } = useSelector((state: RootState) => state.period);

    const title = dateType === "additionalApply" ? "사물함 추가 신청" : "사물함 신청";

    return (
        <>
            {isModalOpened && <Modal />}
            <UserPageLayout
                title={`${year}년도 ${semester}학기 ${title}`}
                subTitle="사물함 신청을 위해 아래 항목들을 기입해주세요."
                icon={ApplyIcon}
                Content={<ApplyForm />}
            />
        </>
    );
}
