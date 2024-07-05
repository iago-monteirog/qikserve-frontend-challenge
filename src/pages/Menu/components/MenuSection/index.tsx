import { CaretUpIcon, ItemDescription, MenuItem, MenuSectionContainer, MenuSectionToggleeBox } from "./styles"

export const MenuSection = () => {
    return (
        <MenuSectionContainer>
            <MenuSectionToggleeBox>
                <h1>Burguers</h1>
                <CaretUpIcon size={24} />
            </MenuSectionToggleeBox>

            <MenuItem>
                <ItemDescription>
                    <h3>Hardcore</h3>
                    <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                    <span>R$33,00</span>
                </ItemDescription>

                <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png" alt="" />
            </MenuItem>
            <MenuItem>
                <ItemDescription>
                    <h3>Hardcore</h3>
                    <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                    <span>R$33,00</span>
                </ItemDescription>

                <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png" alt="" />
            </MenuItem>
            <MenuItem>
                <ItemDescription>
                    <h3>Hardcore</h3>
                    <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                    <span>R$33,00</span>
                </ItemDescription>

                <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png" alt="" />
            </MenuItem>
        </MenuSectionContainer>
    )
}