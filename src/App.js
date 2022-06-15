import React from 'react';
import styled from "styled-components"
import Logo from "./img/logo.png"
import ListaProdutos from './Components/Produtos/Produtos';


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
  display: flex;
  flex-direction: row;
  

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
        <Produtos> <ListaProdutos/> </Produtos>
        <Carrinho></Carrinho>
      </Main>
      <footer></footer>
    </Container>
  );
}

export default App;
