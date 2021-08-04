// instruments
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #main {
  // Resolution
    --res: (100vw - 1209px) / (1920 - 1209);
  // Main width 
    --main-width: calc(300px + (450 - 300) * var(--res));
  // box-shadow
    --shadow-default-min: 0 0 5px var(--color-default-shadow);
    --shadow-default-middle: 0 0 10px var(--color-default-shadow);
    --shadow-default-main: 0 0 15px var(--color-default-shadow);
    --shadow-addition-min: 0 0 5px var(--color-default-shadow);
    --shadow-addition-middle: 0 0 10px var(--color-default-shadow);
    --shadow-addition-main: 0 0 15px var(--color-default-shadow);
    
  // Color background default
    --color-bg-default: #fff;
    --color-bg-ghost:#d6d6d6b3;
    --color-bg-dark: #292929e6;
  // Color typography
    --color-subtitle-default: #fff;
    --color-default-shadow: #000;
    --color-default-shadow-light: #00000099;
  // Subtitle font-size
    --subtitle-fz-min: calc(10px + (15 - 10) * var(--res));
    --subtitle-fz-middle: calc(13px + (18 - 13) * var(--res));
    --subtitle-fz-main: calc(17px + (25 - 17) * var(--res));

  // Border
    --border-main: 1px solid var(--color-bg-default);

  // Border-radius
    --radius-s: calc(5px + (6-5) * var(--res));
    --radius-m: calc(10px + (6-10) * var(--res));
    --radius-l: calc(12px + (8-12) * var(--res));
    --radius-xl: calc(14px + (10-14) * var(--res));
    --radius-xxl: 10%;

  // Padding
    --padding-s: calc(5px + (10 - 5) * var(--res));
    --padding-m: calc(10px + (15 - 10) * var(--res));
    --padding-l: calc(15px + (20 - 15) * var(--res));
    --padding-xl: calc(20px + (25 - 20) * var(--res));
    --padding-xxl: calc(30px + (35 - 30) * var(--res));
  // Margin 
    --margin-s: calc(5px + (10 - 5) * var(--res));
    --margin-m: calc(10px + (15 - 10) * var(--res));
    --margin-l: calc(15px + (20 - 15) * var(--res));
    --margin-xl: calc(18px + (23 - 18) * var(--res));
  
  // Width card-default
    --width-min-card: calc(300px + (450 - 300) * var(--res));
    --width-middle-card: calc(350px + (550 - 350) * var(--res));
    --width-main-card: calc(450px + (650 - 450) * var(--res));
  // Height card-default
    --height-min-card: calc(100px + (160 - 100) * var(--res));
    --height-middle-card: calc(140px + (200 - 140) * var(--res));
    --height-main-card: calc(250px + (350 - 250) * var(--res));

// Width icon 
    --width-mini-icon: calc(10px + (20 - 10) * var(--res));
    --width-middle-icon: calc(30px + (40 - 30) * var(--res));
    --width-main-icon: calc(30px + (40 - 30) * var(--res));
  // Height icon
    --height-mini-icon: calc(10px + (20 - 10) * var(--res));
    --height-middle-icon: calc(30px + (40 - 30) * var(--res));
    --height-main-icon: calc(30px + (40 - 30) * var(--res));

  // Display-grid grid-template-rows
    --grid-temlate-rows-mini: calc(50px + (65 - 50) * var(--res));
    --grid-temlate-rows-middle: calc(65px + (85 - 70) * var(--res));
    --grid-temlate-rows-main: calc(85px + (130 - 85) * var(--res));
    // Display-grid grid-template-columns
    --grid-template-columns-min: calc(30px + (50 - 30) * var(--res));
    --grid-template-columns-middle: calc(30px + (50 - 30) * var(--res));
    --grid-template-columns-main: calc(230px + (350 - 230) * var(--res));
  // Display-grid grid-auto-rows
    --grid-auto-rows-min: calc(30px + (50 - 30) * var(--res));
    --grid-auto-rows-middle: calc(30px + (50 - 30) * var(--res));
    --grid-auto-rows-main: calc(200px + (350 - 200) * var(--res)); 
  // Display-grid grid-gap
    --grid-gap-min: calc(5px + (10 - 5) * var(--res));
    --grid-gap-middle: calc(10px + (15 - 10) * var(--res));
    --grid-gap-main: calc(80px + (120 - 80) * var(--res));
  }
`;
