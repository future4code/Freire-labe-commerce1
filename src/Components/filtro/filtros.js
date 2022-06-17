import React from 'react'
import styled from 'styled-components';
import ListaProdutos from '../Produtos/Produtos';

const FiltrosContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const InputsContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`


export class Filtros extends React.Component {
  state = {
    produtos: ListaProdutos,
    minPreco: "",
    maxPreco: "",
    nomeBuscar: "",
  }

  onChangeMinPreco = (event) => {
    this.setState({ minPreco: event.target.value })
  }

  onChangeMaxPreco = (event) => {
    this.setState({ maxPreco: event.target.value })
  }

  onChangeNomeBuscar = (event) => {
    this.setState({ nomeBuscar: event.target.value })
  }


  render() {
    return <FiltrosContainer>
      <h2>Filtros</h2>
      <InputsContainer>
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={this.state.maxPreco}
          onChange={this.onChangeMaxPreco}
        />
      </InputsContainer>
      <InputsContainer>
        <p>Valor maximo</p>
        <input
          type="number"
          value={this.state.minPreco}
          onChange={this.onChangeMinPreco}
        />
      </InputsContainer>
      <InputsContainer>
        <p>Pesquisa por nome:</p>
        <input
          type="text"
          placeholder="Pesquisa"
          value={this.state.nomeBuscar}
          onChange={this.onChangeNomeBuscar}
        />
      </InputsContainer>
    </FiltrosContainer>
  }
}





