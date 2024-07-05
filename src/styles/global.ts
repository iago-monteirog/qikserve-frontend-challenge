import { createGlobalStyle } from 'styled-components'

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
        background: #EEEEEE;
        color: #121212;
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font: 400 1rem Roboto, sans-serif;
    }
`
