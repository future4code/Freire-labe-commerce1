import React from 'react';
import styled from "styled-components";
import Logo from "./img/logo.png";
import ListaProdutos from './Components/Produtos/Produtos';
import ProdutosCarrinho from './Components/Carrinho/Carrinho';
import Filtro from './Components/Filtros/Filtro';


const Container = styled.div`
display: flex;
flex-direction: column;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* background-color: transparent; */
  /* background-color: rgba(219, 219, 219, 0.25); */
  background-image: url("https://t4.ftcdn.net/jpg/03/18/93/17/240_F_318931784_ui7HN4y0F8HuoMghY8kB57Lpz2aviMRS.jpg")
  /* background-image: url("https://t4.ftcdn.net/jpg/02/77/76/67/360_F_277766785_LU0UUP7xS41MGraZz8sBHey1MEae4gQG.jpg") */
`
const Imagem = styled.img`
  width: 180px;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  background-image: url("https://media.istockphoto.com/photos/starry-outer-space-background-texture-picture-id1064074580?k=20&m=1064074580&s=170667a&w=0&h=akiw5A9_RGa85zQKs513jAO0Du9e5otCri3J0AqjC1E=");
  position: relative;
  color:whitesmoke;
  
`

const Filtros = styled.div`
  grid-column: 1/span 4;
  border: none;
  
  
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
    apagar: true,
    valorMinimo: "",
    valorMaximo: "",
    nomeBuscar: "",
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
    if (!this.state.apagar) {
      this.setState({ listaCompras: listaCopia })
      this.setState({ apagar: true })
    }

  }

  onChangeMaxPreco = (event) => {
    this.setState({ valorMaximo: event.target.value })
    console.log(this.state.valorMaximo)
  }

  onChangeMinPreco = (event) => {
    this.setState({ valorMinimo: event.target.value })
    // this.setState({condicaoMin: true})
  }

  onChangeNomeBuscar = (event) => {
    this.setState({ nomeBuscar: event.target.value })
  }


  render() {



    return (
      <Container className="App">
        <Header><Imagem src={Logo} alt="" /></Header>
        <Main>
          <Filtros>
            <Filtro
              valueMin={this.state.valorMinimo}
              valueMax={this.state.valorMaximo}
              ValueBusca={this.state.nomeBuscar}
              onChangeMaxPreco={this.onChangeMaxPreco}
              onChangeMinPreco={this.onChangeMinPreco}
              onChangeNomeBuscar={this.onChangeNomeBuscar}
            />
          </Filtros>
          <Produtos>
            <ListaProdutos
              valueMin={this.state.valorMinimo}
              valueMax={this.state.valorMaximo}
              ValueBusca={this.state.nomeBuscar}
              pegarValores={this.pegarValores}
            />
          </Produtos>
          <Carrinho><ProdutosCarrinho apagarItens={() => this.apagarItem()} listaCarrinho={this.state.listaCompras} /></Carrinho>
        </Main>
        <footer></footer>
      </Container>
    );
  }
}


export default App;



