import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.secondary};
    }

    body {
        background-color:  ${props => props.theme.colors.background};
        font-size: 14px;
        color:  ${props => props.theme.colors.text};
        font-family: sans-serif;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
