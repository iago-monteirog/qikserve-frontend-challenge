import { ModifierSchemaType } from "../../@types/modifier.type"
import useFetch from "../../hooks/useFetch"
import { priceFormatter } from "../../utils/formatter"
import { ModifierContent, ModifierOptionContainer, ModifierInfo, RadioGroupItem, RadioGroupIndicator } from "./styles"
import * as RadioGroup from "@radix-ui/react-radio-group"

interface ModifiersComponentProps {
    modifiers: ModifierSchemaType
}

export const Modifiers = ({ modifiers }: ModifiersComponentProps) => {
    const { data } = useFetch()

    const currentCurrency = data?.ccy || 'USD'

    return (
        <ModifierContent>
            {modifiers && modifiers.items && modifiers.items.length > 0 ? (
                <RadioGroup.Root>
                    <p>{modifiers.name}</p>
                    <span>{`Select ${modifiers.minChoices} option`}</span>
                    {
                        modifiers.items.map(item => {
                            const formattedPrice = priceFormatter(currentCurrency).format(item.price)
                            return (
                                <ModifierOptionContainer key={item.id}>
                                    <ModifierInfo>
                                        <p>{item.name}</p>
                                        <span>{formattedPrice}</span>
                                    </ModifierInfo>

                                    <RadioGroupItem value={`${item.price}`} id={`${item.id}`}>
                                        <RadioGroupIndicator />
                                    </RadioGroupItem>
                                </ModifierOptionContainer>
                            )
                        })
                    }

                </RadioGroup.Root>
            ) : (
                <></>
            )}

        </ModifierContent>
    )
}