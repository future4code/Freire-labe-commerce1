import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export  const Cards = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin: 0 0 15px 0;
    padding: 20px 0;
    background-color: rgba(219, 219, 219, 0.25);
    border-radius: 20px;
    &:hover{
    transform: scale(1.3);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);}
    button {
    font-size: 15px;
    cursor: pointer;
    &:hover {
            background-color: black;
            color:white;
        }

    @media(max-width: 820px) {
        font-size: 12px;
        line-height: 24px;
    }

    @media(max-width: 567px) {
        font-size: 10px;
        line-height: 19px;
        width: 90%;
    }

}

@media(max-width: 556px) {
        width: 40%;
    }

`

export const ParagrafoOrdenacao = styled.p`
    line-height: 16px;
`

export const Imagem = styled.img`
    width: 40%;
&:hover {transform: scale(2.1);}
`
export const BoxProdutos = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const NomeProduto = styled.p`
    font-size: large;
    font-weight: bold;
    @media(max-width: 567px){
        font-size: 12px;
    }
`

export const BoxOrdenacao = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 24px 8px;
    align-items: center;
    text-align: center;
`
export const BoxCresDec = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    @media(max-width: 571px) {
        flex-direction: column;
    }

`

export const Select = styled.select`
    margin-left: 20px;
    height: 20px;
    @media(max-width: 571px) {
        margin-left: 0px;
    }

`