
import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  body{
    margin: 0 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (min-width: 768px){
      margin: 0 6rem;
    }
  }
`