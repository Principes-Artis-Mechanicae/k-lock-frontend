import { RadioContainer, Radio, RadioLabel } from "./RadioGroup.style";

interface RadioGroupProps {
    name: string;
    options: string[];
}

const RadioGroup = ({ name, options }: RadioGroupProps) => (
    <RadioContainer>
        {options.map((option) => (
            <RadioLabel key={option}>
                <Radio name={name} type="radio" />
                <span>{option}</span>
            </RadioLabel>
        ))}
    </RadioContainer>
);

export default RadioGroup;
