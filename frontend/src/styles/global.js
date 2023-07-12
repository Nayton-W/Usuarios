import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 44%, rgba(0,212,255,1) 100%);
    border-radius: 50px 20px;
    background-image: url('http://i.stack.imgur.com/kx8MT.gif');
    background-size: cover;
  }

  h2{
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 44%, rgba(0,212,255,1) 100%);
    border-radius: 50px 20px;
    background-image: url('http://i.stack.imgur.com/kx8MT.gif');
    background-size: cover;
    color: white;
  }
`;

export default Global;