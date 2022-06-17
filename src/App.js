import React from 'react';
import styled from "styled-components"
import Logo from "./img/logo.png"
import ListaProdutos from './Components/Produtos/Produtos';
import ProdutosCarrinho from './Components/Carrinho/Carrinho';


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

`


class App extends React.Component {

  state = {
    listaCompras: [],
    apagar: true
  }


pegarValores = (produtos) => {

  const adicionarValoresALista = () => {
    if (!produtos.quantidade) {
      produtos.quantidade = 1
    }
    const listaCompleta = [...this.state.listaCompras, produtos]
    this.setState({ listaCompras: listaCompleta })
    this.setState({ apagar: false })
    console.log(this.state)
  }

  // const armazenaProduto = produtos
  if (this.state.listaCompras.length === 0) {
    return adicionarValoresALista()
  }

  for (let i = 0; i < this.state.listaCompras.length; i++) {
    (console.log(produtos.id === this.state.listaCompras[i].id))
    if (produtos.id === this.state.listaCompras[i].id) {
      const copiaLista = [...this.state.listaCompras]
      if (!copiaLista[i].quantidade) {
        copiaLista[i].quantidade = 2
      } else {
        copiaLista[i].quantidade += 1
      }
      console.log(copiaLista)
      return this.setState({ listaCompras: copiaLista })
    } else {
      adicionarValoresALista()
    }

  }

  adicionarValoresALista()
}

  apagarItem = () => {
    const listaLocalstorege = JSON.parse(localStorage.getItem("carrinho"))
    this.setState({ listaCompras: listaLocalstorege })
  }


  componentDidMount() {
    const listaLocalstorege = JSON.parse(localStorage.getItem("carrinho"))
    if (localStorage.length === 0) { return }
    this.setState({ listaCompras: listaLocalstorege })
  }

  componentDidUpdate() {
    const listaCopia = JSON.parse(localStorage.getItem("carrinho"))
    console.log(listaCopia)
    if (!this.state.apagar) {
      this.setState({ listaCompras: listaCopia })
      this.setState({ apagar: true })
    }

  }

  render() {



    return (
      <Container className="App">
        <Header><Imagem src={Logo} alt="" /></Header>
        <Main>
          <Filtros></Filtros>
          <Produtos> <ListaProdutos pegarValores={this.pegarValores} /> </Produtos>
          <Carrinho><ProdutosCarrinho apagarItens={() => this.apagarItem()} listaCarrinho={this.state.listaCompras} /></Carrinho>
        </Main>
        <footer></footer>
      </Container>
    );
  }
}

export default App;
