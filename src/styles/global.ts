import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
/* CSS RESET */
:root {
  --background: hsl(226, 43%, 10%);
  --background-second: hsl(235, 46%, 20%);
  --background-tertiary: hsl(246, 80%, 60%);
  --text: hsl(236, 100%, 87%);
  --light-orange: hsl(15, 100%, 70%);
  --light-blue: hsl(195, 74%, 62%);
  --light-red: hsl(348, 100%, 68%);
  --light-green: hsl(145, 58%, 55%);
  --light-purple: hsl(264, 64%, 52%);
  --light-yellow: hsl(43, 84%, 65%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

html {
  font-size: 18px;
}

body,
input,
textarea,
button {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.8;
  cursor: not-allowed;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* END CSS RESET */
`;
