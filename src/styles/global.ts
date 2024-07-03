import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :focus {
        outline: 0;
    }

    body {
        background: ${props => props.theme.backgroundColour};
        color: ${props => props.theme.primaryColour};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font: 400 1rem Roboto, sans-serif;
    }
`