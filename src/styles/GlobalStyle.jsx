import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }

  div#root {
    padding: 0 15%;
    display: grid;
    background-color: orange;
    min-height: 100vh;

    grid-template: 100px 1fr 1fr 3fr / 230px 920px;
    grid-template-areas:
      'logo description'
      'sidebar view'
      'sidebar view'
      'sidebar view'
    ;
  }
    section.logo {
      grid-area: logo;
      background-color: lime;
    }
    section.sidebar {
      grid-area: sidebar;
      background-color: skyblue;
    }
    section.description {
      grid-area: description;
      background-color: pink;
    }

    section:nth-child(4) {
      grid-area: view;
      background-color: grey;
    }

`;

export default GlobalStyle;
