// instruments
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #main {
  // Resolution
    --res: (100vw - 1209px) / (1920 - 1209);
  // Main width 
    --main-width: calc(300px + (450 - 300) * var(--res));
  // box-shadow
    --shadow-default-min: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);
    --shadow-default-middle: 0 0 10px var(--color-default-shadow);
    --shadow-default-main: 0 0 15px var(--color-default-shadow);
    --shadow-addition-min: 0 0 5px var(--color-addition-shadow);
    --shadow-addition-middle: 0 0 10px var(--color-addition-shadow);
    --shadow-addition-main: 0 0 15px var(--color-addition-shadow);
    
  // Color background default
    --color-bg-default: #fff;
  // Color typography
    --color-subtitle-default: #fff;
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
    --height-max-card: calc(450px + (650 - 450) * var(--res));
  
  // Width card-game
    --width-min-card-game: calc(200px + (300 - 200) * var(--res));
    --width-middle-card-game: calc(370px + (600 - 370) * var(--res));
    --width-main-card-game: calc(450px + (700 - 450) * var(--res));
    --width-max-card-game: calc(540px + (850 - 540) * var(--res));
  // Height card-game
    --height-min-card-game: calc(50px + (100 - 50) * var(--res));
    --height-middle-card-game: calc(100px + (150 - 100) * var(--res));
    --height-main-card-game: calc(450px + (580 - 450) * var(--res));

  // Width icon 
    --width-mini-icon: calc(20px + (30 - 20) * var(--res));
    --width-middle-icon: calc(30px + (40 - 30) * var(--res));
    --width-main-icon: calc(30px + (40 - 30) * var(--res));
  // Height icon
    --height-mini-icon: calc(20px + (30 - 20) * var(--res));
    --height-middle-icon: calc(30px + (40 - 30) * var(--res));
    --height-main-icon: calc(30px + (40 - 30) * var(--res));
    
  // Width button
    --width-mini-button: calc(40px + (80 - 40) * var(--res));
    --width-middle-button: calc(80px + (140 - 80) * var(--res));
    --width-main-button: calc(120px + (170 - 120) * var(--res));
  // Height button
    --height-mini-button: calc(20px + (35 - 20) * var(--res));
    --height-middle-button: calc(35px + (45 - 35) * var(--res));
    --height-main-button: calc(50px + (70 - 50) * var(--res));

  // Width input
    --width-mini-input: calc(20px + (25 - 20) * var(--res));
    --width-array-input: calc(50px + (80 - 50) * var(--res));
    --width-middle-input: calc(90px + (140 - 90) * var(--res));
    --width-main-input: calc(140px + (200 - 140) * var(--res));
  // Height input
    --height-mini-input: calc(20px + (15 - 20) * var(--res));
    --height-middle-input: calc(30px + (45 - 30) * var(--res));
    --height-main-input: calc(30px + (45 - 30) * var(--res));
  // Height flex checkbox
    --height-checkbox: calc(50px + (70 - 50) * var(--res));
  // Height grid input array
    --height-grid-array: calc(110px + (170 - 110) * var(--res));
    
  // Width select
    --width-mini-select: calc(90px + (130 - 90) * var(--res));
    --width-middle-select: calc(120px + (180 - 120) * var(--res));
    --width-main-select: calc(150px + (220 - 150) * var(--res));
  // Height select
    --height-mini-select: calc(30px + (45 - 30) * var(--res));
    --height-middle-select: calc(25px + (50 - 25) * var(--res));
    --height-main-select: calc(40px + (60 - 40) * var(--res));
  
  // Width display-flex
    --width-main-flex: calc(100px + (150 - 110) * var(--res));
    --width-flex-absolute: calc(40px + (50 - 45) * var(--res));
    --width-mini-flex: calc(30px + (50 - 30) * var(--res));
  // Height display-flex
    --height-main-flex: calc(40px + (45 - 40) * var(--res));
    --height-mini-flex: calc(30px + (65 - 30) * var(--res));

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
    --grid-gap-middle: calc(40px + (80 - 40) * var(--res));
    --grid-gap-main: calc(80px + (120 - 80) * var(--res));
  // Display-grid padding
    --grid-min-padding: calc(5px + (10 - 5) * var(--res));
    --grid-middle-padding: calc(30px + (60 - 30) * var(--res));
    --grid-main-padding: calc(40px + (60 - 40) * var(--res));
  }
`;
