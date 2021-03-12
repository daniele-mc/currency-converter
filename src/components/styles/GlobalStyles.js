import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
    *, button {
        border: 0;
        background: none;
        font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, 'Arial', sans-serif;
    }
    html {
        background: var(--primary);
    }
    :root {
        --primary: #F3F3F3;
        --secondary: #E0E0E0;
        --text: #333333;
        --white: #FFFFFF;
        --gray: #999999;
        --outline: #EBEBEB;
        --blue: #699BF7;
        --yellow: #F2C94C;

    }
`;