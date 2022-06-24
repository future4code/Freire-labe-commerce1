import React, { Component } from "react";
import Imagem1 from '../../img/BigBoy.png'
import Imagem2 from '../../img/Goliath.png'
import Imagem3 from '../../img/Leonov.png'
import Imagem4 from '../../img/Liberator.png'
import Imagem5 from '../../img/Newpiranha.png'
import Imagem6 from '../../img/Nostromo.png'
import Imagem7 from '../../img/Phoenix.png'
import Imagem8 from '../../img/Vevengek.png'
import Imagem9 from '../../img/Yamato.png'
import { ParagrafoOrdenacao, Container, Cards, Imagem, BoxProdutos, BoxOrdenacao, NomeProduto, BoxCresDec, Select } from "./Styled";

export default class ListaProdutos extends Component {

    state = {
        tamanhoTela: "",
        produtos: [
            {
                id: 1,
                name: "BigBoy",
                value: 10000,
                imageUrl: Imagem1,
            },
            {
                id: 2,
                name: "Goliath",
                value: 15000,
                imageUrl: Imagem2,
            },
            {
                id: 3,
                name: "Leonov",
                value: 30000,
                imageUrl: Imagem3,
            },
            {
                id: 4,
                name: "Liberator",
                value: 18000,
                imageUrl: Imagem4,
            },
            {
                id: 5,
                name: "Newpiranha",
                value: 17000,
                imageUrl: Imagem5,
            },
            {
                id: 6,
                name: "Nostromo",
                value: 22000,
                imageUrl: Imagem6,
            },
            {
                id: 7,
                name: "Phoenix",
                value: 12000,
                imageUrl: Imagem7,
            },
            {
                id: 8,
                name: "Vevengek",
                value: 40000,
                imageUrl: Imagem8,
            },
            {
                id: 9,
                name: "Yamato",
                value: 30000,
                imageUrl: Imagem9,
            },


        ]
    }


    ordenarAoInicariar = () => {
        const listaCopia = [...this.state.produtos]
        listaCopia.sort(function (a, b) {
            if (a.value > b.value) {
                return true;
            } else {
                return -1;
            }
        })
      
        this.setState({ produtos: listaCopia })
    }

    componentDidMount () {
        this.ordenarAoInicariar()
    }

    pegarOrdem = (event) => {
        const listaCopia = [...this.state.produtos]
        if (event.target.value === "Crescente") {
            listaCopia.sort(function (a, b) {
                if (a.value > b.value) {
                    return true;
                } else {
                    return -1;
                }
            })
        } else {
            listaCopia.sort(function (a, b) {
                if (a.value > b.value) {
                    return -1;
                } else {
                    return true;
                }
            })
        }
        this.setState({ produtos: listaCopia })
    }

    adicionarAoCarrinho = (produto) => {
        this.props.pegarValores(produto)

    }


    render() {
        const renderizarProdutos = this.state.produtos
            .filter((produto) => {
                return !this.props.valueMin || produto.value >= this.props.valueMin
            })
            .filter((produto) => {
                return !this.props.valueMax || produto.value <= this.props.valueMax
            })
            .filter((produto) => {
                return produto.name.toLowerCase().includes(this.props.ValueBusca.toLowerCase())
            })
            .map((produto) => {

                return (
                    <Cards key={Math.random()}>
                        <Imagem src={produto.imageUrl} alt="" />
                        <NomeProduto>{produto.name}</NomeProduto>
                        <p>R$:{produto.value} </p>
                        <button onClick={() => this.adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
                    </Cards>
                )
            }
            )


        return (
            <Container>
                <BoxOrdenacao>
                    <ParagrafoOrdenacao>Quantidade de Produtos: {renderizarProdutos.length}</ParagrafoOrdenacao>
                    <BoxCresDec>
                        <p>Ordenação:</p> 
                        <Select onChange={this.pegarOrdem} name="Ordem dos Produtos" id="ordem produtos">
                            <option value="Crescente">Crescente</option>
                            <option value="Decrescente">Decrescente</option>
                        </Select>
                    </BoxCresDec>

                </BoxOrdenacao>
                <BoxProdutos>

                    {renderizarProdutos}

                </BoxProdutos>
            </Container>)
    }

}
