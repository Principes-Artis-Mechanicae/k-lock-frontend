import { useSelector } from "react-redux";

import UserPageLayout from "@/components/common/layout/UserPageLayout";
import Modal from "@/components/common/modal/Modal";

import ApplyIcon from "@/assets/icons/apply.svg";

import ApplyForm from "./ApplyForm";
import { RootState } from "@/store/store";

export default function Apply() {
    const { isModalOpened } = useSelector((state: RootState) => state.ui);

    return (
        <>
            {isModalOpened && <Modal />}
            <UserPageLayout
                title="사물함 신청 및 추가 신청"
                subTitle="사물함 신청을 위해 아래 항목들을 기입해주세요."
                icon={ApplyIcon}
                Content={<ApplyForm />}
            />
        </>
    );
}
