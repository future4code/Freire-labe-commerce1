import React from "react";
import styled from "styled-components";
import ImgCarrinho from "../../img/carrinho-de-compras.png"


const ImagemCarrinho = styled.img`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    width: 40px;
    height: 40px;
`
const BoxTitulo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid;
`

const BoxItensCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
`

const Botao = styled.button`
    height: 30px;
    cursor: pointer;
    :hover {
            background-color: red;
            color:white;
        }
`

const BoxInformacoesProdutosCarrinho = styled.div `
display: flex;
align-items: center;


`

const ParagrafoListaCarrinho = styled.p `
    padding: 0 3px;
`

export default class ProdutosCarrinho extends React.Component {

    state = {
        valorTotal: 0
    }

    removerProdutoCarrinho = (id, quantidade) => {
        let novaListaProdutosFiltrado = ""

        if (quantidade === 1 || !quantidade) {
            novaListaProdutosFiltrado = this.props.listaCarrinho.filter((objeto) => {
                return objeto.id !== id;
            })
        } else {
            novaListaProdutosFiltrado = this.props.listaCarrinho.map((objeto) => {
                if (objeto.id === id) {
                    objeto.quantidade -= 1
                    return objeto
                } else {
                    return objeto
                }
            });
        }

        localStorage.setItem("carrinho", JSON.stringify(novaListaProdutosFiltrado))
        this.props.apagarItens(novaListaProdutosFiltrado)
    };

    calcularTotal = () => {
        const listaDePrecos = this.props.listaCarrinho.map((produto) => {
            return { "valor": produto.value, "quantidade": produto.quantidade }
        })
        let valorTotal = 0
        for (let i = 0; i < listaDePrecos.length; i++) {
            if (listaDePrecos[i].quantidade > 1) {
                listaDePrecos[i].valor = listaDePrecos[i].valor * listaDePrecos[i].quantidade
            }
            valorTotal += listaDePrecos[i].valor
        }
        if (this.state.valorTotal !== valorTotal) {
            this.setState({ valorTotal: valorTotal })
        }
    }

    componentDidUpdate() {
        localStorage.setItem("carrinho", JSON.stringify(this.props.listaCarrinho))
        this.calcularTotal()
    }


    render() {

        const RenderizarNaTela = () => {
            if (this.props.listaCarrinho.length === 0) {
                return <p>Vazio</p>
            } else {
                return (
                    this.props.listaCarrinho.map((produto) => {
                        for (let verificarProduto of this.props.listaCarrinho) {
                            if (verificarProduto.id === produto.id) {

                            }
                        }
                        return (
                            <BoxItensCarrinho key={Math.random()}>
                                <BoxInformacoesProdutosCarrinho>

                                    <ParagrafoListaCarrinho>{produto.quantidade}  x </ParagrafoListaCarrinho>
                                    <ParagrafoListaCarrinho>{produto.name}</ParagrafoListaCarrinho>
                                    <ParagrafoListaCarrinho>R$:{produto.value} </ParagrafoListaCarrinho>
       

                                </BoxInformacoesProdutosCarrinho>
                                <Botao onClick={() => this.removerProdutoCarrinho(produto.id, produto.quantidade)}>Remover</Botao>
                            </BoxItensCarrinho>
                        )
                    })
                )
            }
        }

        return (
            <div>
                <BoxTitulo>
                    <p>Carrinho</p>
                    <ImagemCarrinho src={ImgCarrinho} alt="" />
                </BoxTitulo>
                <RenderizarNaTela />
                <div><p> Valor Total: R$ {this.state.valorTotal === 0 ? "0,00" : this.state.valorTotal}</p></div>
            </div>
        )
    }
}