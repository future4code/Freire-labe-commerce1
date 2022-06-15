import React, { Component } from "react";
import styled from "styled-components";
import Imagem1 from '../../img/BigBoy.png'
import Imagem2 from '../../img/Goliath.png'
import Imagem3 from '../../img/Leonov.png'
import Imagem4 from '../../img/Liberator.png'
import Imagem5 from '../../img/Newpiranha.png'
import Imagem6 from '../../img/Nostromo.png'
import Imagem7 from '../../img/Phoenix.png'
import Imagem8 from '../../img/Vevengek.png'
import Imagem9 from '../../img/Yamato.png'

const Cards = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid black;
    width: 30%;
    margin: 0 0 15px 0;
    
    
`
const Imagem = styled.img`
    width: 30%;
`
const DivPai = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-evenly;

`
const NomeProduto = styled.p`
    font-size: large;
    font-weight: bold;
`



export default class ListaProdutos extends Component {

    state = {
        valorSelect: "Crescente",

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
    pegarOrdem = (event) => {
        this.setState({ valorSelect: event.target.value })
        // this.state.produtos.value.sort(function (a, b) {
        //     if (a > b) return 1;
        //     if (a < b) return -1;
        //     return 0;
        // });
    }

    render() {
        const renderizarProdutos = this.state.produtos.map((produto) => {

            return (
                <Cards key={Math.random()}>
                    <Imagem src={produto.imageUrl} alt="" />
                    <NomeProduto>{produto.name}</NomeProduto>
                    <p>R$:{produto.value} </p>
                    <button>Adicionar ao Carrinho</button>
                </Cards>
            )
        }
        )


        return (
            <div>

                <p>Quantidade de Produtos: {this.state.produtos.length}</p>
                <p>Ordenação:</p>
                <select onChange={this.pegarOrdem} name="Ordem dos Produtos" id="ordem produtos">
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select>

                <DivPai>

                    {renderizarProdutos}

                </DivPai>
            </div>)
    }

}
