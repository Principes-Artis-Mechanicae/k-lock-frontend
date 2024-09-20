import AccordionItem from "@/components/common/form/Accordion";
import UserPageLayout from "@/components/common/layout/UserPageLayout";

import Locker3FImg from "@/assets/locker-3f.png";
import LockerB1Img from "@/assets/locker-b1.png";
import LockerLImg from "@/assets/locker-l.png";

const LocationContent = () => {
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

    return (
        <>
            {locationInfos.map((info, index) => (
                <AccordionItem key={index} title={info.title} content={info.content} img={info.img} number={index} />
            ))}
        </>
    );
};

export default function Location() {
    return (
        <UserPageLayout
            title="사물함 위치 안내"
            subTitle="사물함 위치를 참고해주시길 바랍니다"
            Content={<LocationContent />}
        />
    );
}
