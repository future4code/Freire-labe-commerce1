import React from "react";
import ImgCarrinho from "../../img/carrinho-de-compras.png"
import { ParagrafoCarrinhoVazio, XParaFecharCarrinho, ParagrafoMobile, Container, ImagemCarrinho, 
    ImagemCarrinhoMobile, AtivadoraMobile, BoxTitulo, BoxItensCarrinho, Botao, 
    BoxInformacoesProdutosCarrinho, ParagrafoListaCarrinho, BoxCarrinhoMobile } from "./Style"

export default class ProdutosCarrinho extends React.Component {

    state = {
        valorTotal: 0,
        carrinhoAtivo: false,
        QuantItensCarrinho: 0,
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


    contadorItensCarrinho = () => {
        const lista = JSON.parse(localStorage.getItem("carrinho"))
        let valor = 0
        lista.map(item => {
           return valor += item.quantidade
        })
        if (valor !== this.state.QuantItensCarrinho) {
            this.setState({ QuantItensCarrinho: valor })
        }
    }


    ativadorCarrinhoMobile = () => {
        if (window.screen.width <= 1140) {
            this.setState({ carrinhoAtivo: !this.state.carrinhoAtivo })
        }
    }

    componentDidUpdate() {
        localStorage.setItem("carrinho", JSON.stringify(this.props.listaCarrinho))
        this.calcularTotal()
        this.contadorItensCarrinho()
    }


    render() {

        const RenderizarNaTela = () => {
            if (this.props.listaCarrinho.length === 0) {
                return <ParagrafoCarrinhoVazio>Vazio</ParagrafoCarrinhoVazio>
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
            <Container>
                <BoxCarrinhoMobile onClick={this.ativadorCarrinhoMobile}>
                    {this.state.carrinhoAtivo ? <XParaFecharCarrinho>X</XParaFecharCarrinho> : ""}
                    <ImagemCarrinhoMobile src={ImgCarrinho} alt="Imgagem Carrinho" />
                    {this.state.QuantItensCarrinho ? <ParagrafoMobile>{this.state.QuantItensCarrinho}</ParagrafoMobile> : ""}
                </BoxCarrinhoMobile>
                <AtivadoraMobile valorClick={this.state.carrinhoAtivo}>
                    <BoxTitulo>
                        <p>Carrinho</p>
                        <ImagemCarrinho src={ImgCarrinho} alt="" onClick={this.ativadorCarrinhoMobile} />
                    </BoxTitulo>
                    <RenderizarNaTela />
                    <div><p> Valor Total: R$ {this.state.valorTotal === 0 ? "0,00" : this.state.valorTotal}</p></div>
                </AtivadoraMobile>
            </Container>
        )
    }
}