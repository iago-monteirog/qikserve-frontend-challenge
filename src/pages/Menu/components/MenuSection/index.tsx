import { useState } from "react"
import { CaretDownIcon, CaretUpIcon, ItemDescription, MenuItem, MenuSectionContainer, MenuSectionToggleeBox } from "./styles"
import './menuAnimation.css'

export const MenuSection = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <MenuSectionContainer>
            <MenuSectionToggleeBox>
                <h1>Burguers</h1>
                <div onClick={toggleMenu}>
                    {isOpen ? <CaretUpIcon size={24} /> : <CaretDownIcon size={24} />}
                </div>
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