import { useSelector } from "react-redux";

import UserPageLayout from "@/components/common/layout/UserPageLayout";
import Modal from "@/components/common/modal/Modal";

import CheckIcon from "@/assets/icons/check.svg";

import CheckForm from "./CheckForm";
import { RootState } from "@/store/store";

export default function Check() {
    const { isModalOpened } = useSelector((state: RootState) => state.ui);

    return (
        <>
            {isModalOpened && <Modal />}
            <UserPageLayout
                title="사물함 배정 조회"
                subTitle="사물함 배정 결과입니다."
                icon={CheckIcon}
                Content={<CheckForm />}
            />
        </>
    );
}
