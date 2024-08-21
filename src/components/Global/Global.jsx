import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    :root{
        --cardo-font: "Cardo", serif;
        --inter-font: "Inter", sans-serif;
        --green: #2CBC85;
        --black: #000000;
        --gray: #999999;
        --white: #ffffff;
        --light-black: #161718;
        --yellow: #FFC107;
    }

    body{
        font-family: var(--inter-font);
        background-color: var(--black);
        overflow-x: hidden;
    }

`;

export default Global;
