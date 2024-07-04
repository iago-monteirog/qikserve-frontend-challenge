import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.navBackgroundColour};
    height: 52px;
    width: 100%;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-transform: uppercase;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: ${(props) => props.theme.backgroundColour};
            width: 14.5rem;
            height: 100%;
            padding: 15px;

            &:hover {
                border-bottom: 5px solid #fff;
            }

            &.active {
                border-bottom: 5px solid #fff;
            }
        }
    }
`