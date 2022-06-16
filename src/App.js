import React from 'react';
import styled from "styled-components";
import Logo from "./img/logo.png";
import ListaProdutos from './Components/Produtos/Produtos';
import {Filtros} from './Components/filtro/filtros';

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

const Filtro = styled.div`
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

class App extends React.Component {
  state = {
    minFiltro: 100,
    maxFiltro: 1000,
    nameFiltro: 'Produto',
    produtosNoCarrinho: ['']
  }

  onChangeMinFiltro = (event) => {
    this.setState({minFiltro: event.target.value})
  }

  onChangeMaxFiltro = (event) => {
    this.setState({maxFiltro: event.target.value})
  }

  onChangeNameFiltro = (event) => {
    this.setState({nameFiltro: event.target.value})
  }

  render() {
  return (
    <Container className="App">
      <Header><Imagem src={Logo} alt="" /></Header>
      <Main>
      <Filtros
              minFiltro={this.state.minFiltro}
              maxFiltro={this.state.maxFiltro}
              nameFiltro={this.state.nameFiltro}
              onChangeMinFiltro={this.onChangeMinFiltro}            
              onChangeMaxFiltro={this.onChangeMaxFiltro}            
              onChangeNameFiltro={this.onChangeNameFiltro}                  
            />
        <Produtos><ListaProdutos/> </Produtos>
        <Carrinho></Carrinho>
      </Main>
      <footer></footer>
    </Container>
        );
      }
    }

export default App;
