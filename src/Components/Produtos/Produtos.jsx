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

const Cards=styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid black;
    max-width: 60%;
    margin: 0;
`
const Imagem= styled.img`
    width: 50%;
`



export default class ListaProdutos extends Component {

    state = {
        produtos: [
            {
                id: 1,
                name: "BigBoy",
                value: 10000.0,
                imageUrl:Imagem1,
    },
            {
                id: 2,
                name: "Goliath",
                value: 10000.0,
                imageUrl: Imagem2,
    },
            {
                id: 3,
                name: "Leonov",
                value: 10000.0,
                imageUrl: Imagem3,
    },
            {
                id: 4,
                name: "Liberator",
                value: 10000.0,
                imageUrl: Imagem4,
    },
            {
                id: 5,
                name: "Newpiranha",
                value: 10000.0,
                imageUrl: Imagem5,
    },
            {
                id: 6,
                name: "Nostromo",
                value: 10000.0,
                imageUrl: Imagem6,
    },
            {
                id: 7,
                name: "Phoenix",
                value: 10000.0,
                imageUrl: Imagem7,
    },
            {
                id: 8,
                name: "Vevengek",
                value: 10000.0,
                imageUrl: Imagem8,
    },
            {
                id: 9,
                name: "Yamato",
                value: 10000.0,
                imageUrl: Imagem9,
    },


        ]
    }

    render() {
        const renderizarProdutos = this.state.produtos.map((produto) => {

            return (
                <Cards key={Math.random()}>
                    <Imagem src={produto.imageUrl} alt="" />
                    <p>R$:{produto.value} </p> 
                    <button>Adicionar ao Carrinho</button>
                </Cards>
            )
        }
        )


        return (<div>
            
        {renderizarProdutos}
        
        </div>)

    }

}
