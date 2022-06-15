import React from 'react';
import styled from "styled-components"
import Logo from "./img/logo.png"
import ListaProdutos from './Components/Produtos/Produtos';

import Imagem1 from './img/BigBoy.png'
import Imagem2 from './img/Goliath.png'
import Imagem3 from './img/Leonov.png'
import Imagem4 from './img/Liberator.png'
import Imagem5 from './img/Newpiranha.png'
import Imagem6 from './img/Nostromo.png'
import Imagem7 from './img/Phoenix.png'
import Imagem8 from './img/Vevengek.png'
import Imagem9 from './img/Yamato.png'


const Container = styled.div`
display: flex;
flex-direction: column;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Imagem = styled.img`
  width: 180px;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
`

const Filtros = styled.div`
  grid-column: 1/span 4;
  background-color: green;
`

const Produtos = styled.div`
  grid-column: 5/span 12;
  background-color: yellow;

`

const Carrinho = styled.div`
  grid-column: 17/span 4;
  background-color: blue;

`
function App() {
  return (
    <Container className="App">
      <Header><Imagem src={Logo} alt="" /></Header>
      <Main>
        <Filtros></Filtros>
        <Produtos><ListaProdutos/></Produtos>
        <Carrinho></Carrinho>
      </Main>
      <footer></footer>
    </Container>
  );
}

export default App;
