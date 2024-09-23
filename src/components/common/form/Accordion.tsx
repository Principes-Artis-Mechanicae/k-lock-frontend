import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const TitleStyle = {
    fontWeight: 700,
    fontSize: "16px",
    color: "#9a2828",
};

const ContentStyle = {
    maxWidth: "500px",
    fontSize: "16px",
    whiteSpace: "pre-wrap",
};

const AccordionImg = styled.img`
    width: 100%;
    max-width: 500px;
`;

const CustomAccordion = styled(Accordion)`
    padding: 5px 10px;

    &::before {
        display: none;
    }
`;

interface AccordionItemProps {
    title: string;
    content: string;
    number: number;
    img?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, number, img }) => {
    return (
        <CustomAccordion style={{ borderRadius: "20px", margin: "10px 10px" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${number}-content`}
                id={`panel${number}-header`}
            >
                <Typography style={TitleStyle}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {img && <AccordionImg src={img} alt={title} />}
                <Typography style={ContentStyle}>{content}</Typography>
            </AccordionDetails>
        </CustomAccordion>
    );
};

export default AccordionItem;
