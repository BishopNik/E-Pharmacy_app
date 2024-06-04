/** @format */

import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-weight: 400;
        font-style: normal;
        src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 500;
        font-style: normal;
        src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2') format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 600;
        font-style: normal;
        src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2') format('woff2');
        font-display: swap;
    }

    :root {
        --main-black: rgba(29,30,33,1);
        --accent: rgba(89,177,122,1);
        --accent-2: rgba(232,80,80,1);
        --text: rgba(220,221,223,1);
        --background: rgba(231,241,237,1);
        --background-2: rgba(247,248,250,1);
        --background-3: rgba(255,255,255,1);
        --accent-hover: rgba(63, 148, 95, 1);
        --accent-disabled: rgba(29, 30, 33, 0.1);
        --text-grey: rgba(29, 30, 33, 0.4);
    }
    
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background: var(--background-2);
    }

    h1, h2, h3, p, button{
        margin: 0;
        padding: 0;
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

`;
