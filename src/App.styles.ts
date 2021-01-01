import styled, { createGlobalStyle } from "styled-components";
import logo from "./images/colorful.jpg";

export const GlobalStyles = createGlobalStyle`
    html {
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
        font-family: 'Old Standard TT', serif;
        font-size: 1.5em;
    }

    select, 
    button {
        font-size: inherit;
    }

    @media only screen and (max-width: 600px) {
        body {
            background-image: none;
            font-size: 1.2em;
        }
    }

    @media only screen and (max-width: 768px) {
       body {
           background-size: auto;
       } 
           
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
    padding: 30px;
    min-width: 500px;
    max-width: 750px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
        text-align: center;
    }

    @media only screen and (max-width: 600px), screen and (max-height: 600px) {
        min-width: auto;
        width: 100vw;
        height: 100vh;

        .title {
            font-size: 2em;
        }
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
