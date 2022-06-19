import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 1140px){
        align-items: flex-end
    }
`

export const ImagemCarrinho = styled.img`
    width: 40px;
    height: 40px;
    @media(max-width: 1140px) {
        display: none;
    }
`

export const ImagemCarrinhoMobile = styled.img`
@media(min-width: 1141px) {
        display: none;
    }
    width: 40px;
    height: 40px;
`

export const BoxTitulo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid;
`

export const BoxItensCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
`

export const AtivadoraMobile = styled.div`
    @media(max-width: 1140px) {
        display: ${props => props.valorClick ? "block" : "none"};
        background:#dbdbdbe2;
        border-radius: 8px;
        padding: 20px;
        width: 260px;
    }
`

export const ParagrafoMobile = styled.div`
    position: absolute;
    bottom: -10px;
    right: -8px;
    background: white;
    padding: 4px;
    border-radius: 8px;
`

export const XParaFecharCarrinho = styled.p`
    position: absolute;
    background: red;
    color: white;
    padding: 5px;
    border-radius: 50%;
    top: -9px;
    right: 33px;
    font-size: 8px;
`

export const ParagrafoCarrinhoVazio = styled.p`
    text-align: center;
    margin: 10px 0 15px;
`


export const Botao = styled.button`
    height: 30px;
    cursor: pointer;
    &:hover {
            background-color: red;
            color:white;
        }
`

export const BoxInformacoesProdutosCarrinho = styled.div `
    display: flex;
    align-items: center;
`

export const ParagrafoListaCarrinho = styled.p `
    padding: 0 3px;

`