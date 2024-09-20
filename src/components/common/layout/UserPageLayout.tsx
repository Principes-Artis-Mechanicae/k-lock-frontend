import { UserPageLayoutWrapper, UserPageSection, Title, SubTitle } from "./UserPageLayout.style";

interface userPageProps {
    title: string;
    subTitle: string;
    icon?: string;
    Content: React.ReactNode;
}

const UserPageLayout: React.FC<userPageProps> = ({ title, subTitle, icon, Content }) => {
    return (
        <UserPageLayoutWrapper>
            <UserPageSection>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </UserPageSection>
            {icon && (
                <UserPageSection>
                    <img src={icon} alt="apply" />
                </UserPageSection>
            )}
            <UserPageSection>{Content}</UserPageSection>
        </UserPageLayoutWrapper>
    );
};

export default UserPageLayout;
