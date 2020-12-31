import styled, { createGlobalStyle } from "styled-components";
import logo from "./images/colorful.jpg";

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        line-height: 1.15;
    }

    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url(${logo});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-family: 'Old Standard TT', serif;
        font-size: 1.5em;
    }

    

    select, 
    button {
        font-size: inherit;
    }

    .score {
        font-size: 1.2em;
    }
`;

// Wrapper
export const Wrapper = styled.div`
    background: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 15px;
    min-width: 600px;
    width: 100%;

    * {
        margin: 5px 0;
    }

    div:last-child,
    p:last-child {
        margin-bottom: 30px;
    }

    div {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }

    .title {
        font-size: 3.6em;
        font-weight: bold;
        background: linear-gradient(
            311deg,
            rgba(44, 135, 182, 1) 0%,
            rgba(172, 192, 196, 1) 100%
        );
        background-clip: text;
        background-size: 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        margin-top: 30px;
    }
`;

// Button
export const Button = styled.button`
    width: 100%;
    border: none;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 1.2em;
`;
