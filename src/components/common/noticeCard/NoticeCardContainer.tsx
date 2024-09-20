import NoticeCard from "./NoticeCard";
import { NoticeCardContainerWrapper } from "./NoticeCardContainer.style";

const NoticeCardContainer = () => {
    const noticeCardData = [
        {
            title: "사물함 이용 안내",
            navigationPath: "/notice/about",
        },
        {
            title: "사물함 위치 안내",
            navigationPath: "/notice/location",
        },
    ];

    return (
        <NoticeCardContainerWrapper>
            {noticeCardData.map((noticeCard, index) => (
                <NoticeCard key={index} title={noticeCard.title} navigationPath={noticeCard.navigationPath} />
            ))}
        </NoticeCardContainerWrapper>
    );
};

export default NoticeCardContainer;
