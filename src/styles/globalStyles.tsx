import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import { colors, fonts } from "./variables";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        font-family: ${fonts.primary}, sans-serif;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        padding: 0;
        border: 0;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
    }
    html, body {
        height: 100%;
        width: 100%;
    }

    ul,
    ol {
        list-style: none;
        list-style-type: none;
    }
  
    a {
        color: inherit;
        text-decoration: inherit;
    }

    body {
        overflow-x: hidden;
        margin: 0 auto;
        position: relative;
        background-color: ${colors.grayBackground};
    }

    #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }
`;

export const GlobalContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const MainContainer = styled.div`
    width: 100%;
    background-color: red;
    height: 100%;
    display: grid;
    grid-template-columns: 20% auto;
    flex-direction: row;
`;