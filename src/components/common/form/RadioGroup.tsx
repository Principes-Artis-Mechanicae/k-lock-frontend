import { lockerValueChanger } from "@/utils/utils";

import { RadioContainer, Radio, RadioLabel } from "./RadioGroup.style";

interface RadioGroupProps {
    name: string;
    options: string[];
    selectedOption: string;
    onChange: (value: string) => void;
}

const RadioGroup = ({ name, options, selectedOption, onChange }: RadioGroupProps) => (
    <RadioContainer>
        {options.map((option) => (
            <RadioLabel key={option}>
                <Radio
                    name={name}
                    type="radio"
                    checked={selectedOption === lockerValueChanger[option]}
                    onChange={() => onChange(option)}
                />
                <span>{option}</span>
            </RadioLabel>
        ))}
    </RadioContainer>
);

export default RadioGroup;
