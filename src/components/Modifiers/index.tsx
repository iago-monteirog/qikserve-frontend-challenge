import { ModifierContent, ModifierOptionContainer, ModifierInfo, RadioGroupItem, RadioGroupIndicator } from "./styles"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Modifiers = () => {
    return (
        <ModifierContent>
            <RadioGroup.Root>
                <p>Choose your size</p>
                <span>Select 1 option</span>

                <ModifierOptionContainer>
                    <ModifierInfo>
                        <p>1 meat</p>
                        <span>R$ 33,00</span>
                    </ModifierInfo>

                    <RadioGroupItem value="1meat" id="r1">
                        <RadioGroupIndicator />
                    </RadioGroupItem>
                </ModifierOptionContainer>
                <ModifierOptionContainer>
                    <ModifierInfo>
                        <p>2 meat</p>
                        <span>R$ 33,00</span>
                    </ModifierInfo>

                    <RadioGroupItem value="2meat" id="r2">
                        <RadioGroupIndicator />
                    </RadioGroupItem>
                </ModifierOptionContainer>
            </RadioGroup.Root>
        </ModifierContent>
    )
}