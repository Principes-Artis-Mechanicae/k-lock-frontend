import AccordionItem from "@/components/common/form/Accordion";

import Locker3FImg from "@/assets/locker/locker-3f.png";
import LockerB1Img from "@/assets/locker/locker-b1.png";
import LockerLImg from "@/assets/locker/locker-l.png";

const renderAccordionItems = (items: { title: string; content: string; img?: string }[]) => {
    return items.map((info, index) => (
        <AccordionItem key={index} title={info.title} content={info.content} img={info.img} number={index} />
    ));
};

export const AboutContent = () => {
    const aboutInfos = [
        {
            title: "사물함 비밀번호 변경방법",
            content: `- 디지털 사물함(L, 3F)
            1. 뒷편의 덮개를 연다.
            2. 설정 버튼을 누른다.
            3. 비밀번호를 입력한다.
            4. DONE 버튼을 누른다.

- 아날로그 사물함(B1)
            1. 사물함을 연다.
            2. 레버를 누르면서 돌린다.
            3. 비밀번호를 입력한다.
            4. 레버를 왼쪽으로 돌린다.

- 비밀번호 변경 시 학기 이후로 초기 비밀번호로 초기화해주시길 바랍니다. 초기 비밀번호 미설정시 다음 학기 사물함 이용에 불이익을 받을 수 있습니다.`,
        },
        {
            title: "사물함 고장 신고 안내",
            content: `- 고장 신고 진행 절차
            1. 사물함 고장 신고를 확인합니다.
            2. 고장 여부 및 수리 가능 여부를 판단합니다.
            3. 재신청 희망을 반영하여 사물함을 재배정합니다.

- 재신청시 유의사항
            - 재신청시 희망 사물함에 배정되지 않을 수 있습니다.
            - 일주일 이내로 재배정되므로, 사이트를 참고해주시길 바랍니다
            - 재배정이 되지 않을 경우 페이지 아래의 카톡 아이디로 문의해주시기 바랍니다.`,
        },
        {
            title: "초기 비밀번호가 맞지 않을시",
            content: `- 대부분 사물함이 초기 비밀번호가 아니면 0000으로 설정되어 있습니다.

- 초기 비밀번호와 0000을 시도했는데도 얼리지 않을 경우, 사물함 고장 신고 대신, 페이지 아래의 카톡 아이디로 문의해주시기 바랍니다.`,
        },
    ];

    return <>{renderAccordionItems(aboutInfos)}</>;
};

export const LocationContent = () => {
    const locationInfos = [
        {
            title: "3F",
            content: `
- 위치 : 3층 우측편 강의실 앞 사물함

- 상 : 4층, 3층
- 중 : 3층, 2층
- 하 : 2층, 1층`,
            img: Locker3FImg,
        },
        {
            title: "L",
            content: `
- 위치 : 1층 학생회실 앞 사물함

- 상 : 4층, 3층
- 중 : 3층, 2층
- 하 : 2층, 1층`,
            img: LockerLImg,
        },
        {
            title: "B1",
            content: `
-   위치 : 지하 1층 지하강의실 앞 사물함

- 상 : 5층, 4층
- 중 : 4층, 3층
- 하 : 2층, 1층
            `,
            img: LockerB1Img,
        },
    ];

    return <>{renderAccordionItems(locationInfos)}</>;
};
