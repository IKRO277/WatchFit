import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4rem; 
    background: black;
    align-items: center;
    margin-top: 1rem;
    @media screen and (min-width: 768px) {
        margin-top: 3rem;
    } 
`
export const ImageHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: auto;
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
        width: 10rem; 
    } 
`

export const Img = styled.img`
    max-width: 100%;
    height: auto;
`
export const Separator = styled.div`
    display: flex;
    width: 20rem;
    height: 1px;
    border-bottom: 1px solid white;
    margin-top: 1rem;
    margin-bottom: 1rem; /* Corrigido para margin-bottom */
    @media screen and (min-width: 768px) {
        width: 80%;
    } 
`
export const ConteinerHeader = styled.div`
    display: flex;
    width: 20rem;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-top: .5rem;
`

export const ContainerIcons = styled.div`
    display: flex;
    width: auto;
    height: auto;
    gap: 0.60rem;
    align-items: center;
    justify-content: center;
`

export const Icons = styled.img`
    display: flex; 
    width: 1.75rem;
    height: 1.75rem;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 10rem; 
        height: 10rem;
    } 
`

export const BotaoLogin = styled.button`
    display: flex;
    width: 6rem;
    height: 2rem;
    border: none;
    background: orange;
    color: white;
    border-radius: .5rem;
    align-items: center;
    justify-content: center;
`

export const HeaderTitle = styled.div`
    display: flex;
    width: 20.188rem;
    height: 6.75rem;
    font-size: 3rem;
    line-height: 2.5rem;
    font-family: "roboto";
    color: white;
    text-align: center;
    margin-top: 2rem;
`
export const SeparadorBeneficios = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: center;
    margin-top: 6rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`

export const Beneficio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    gap: 1rem;
`

export const Correto = styled.img`
    display: flex; 
    width: 1.75rem;
    height: 1.75rem;
    justify-content: center;
    align-items: center;
`
export const Frases = styled.div`
    display: flex;
    width: 8rem;
    height: auto;
    color: white;
    font-size: 1rem;
    text-align: center;
`
export const Cards = styled.div`
    display: flex;
    width: 20rem;
    height: 4rem;
    background-color: grey;
    margin-top: 8rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: none;
    border-radius: 0.2rem;
`
export const Card = styled.div`
    display: flex;
    width: 20rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ImgCard = styled.img`
    display: flex; 
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 10rem; 
        height: 10rem;
    } 
`