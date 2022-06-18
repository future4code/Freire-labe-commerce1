import React from 'react'
import styled from 'styled-components';
import ListaProdutos from '../Produtos/Produtos';

const FiltrosContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`

const InputsContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;

`

export default class Filtros extends React.Component {

  render() {
    return <FiltrosContainer>
      <h2>Filtros</h2>
      <InputsContainer>
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={this.props.valueMin}
          onChange={this.props.onChangeMinPreco}
        />
      </InputsContainer>
      <InputsContainer>
        <p>Valor maximo</p>
        <input
          type="number"
          value={this.props.valueMax}
          onChange={this.onChangeMaxPreco}
        />
      </InputsContainer>
      <InputsContainer>
      <p>Buscar por nome</p>
      <input
          type="text"
          placeholder="Pesquisa"
          value={this.props.valueBusca}
          onChange={this.props.onChangeNomeBuscar}
        />
      </InputsContainer>
    </FiltrosContainer>
  }
}





