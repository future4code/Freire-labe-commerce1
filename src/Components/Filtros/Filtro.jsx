import React from 'react'
import { FiltrosContainer, InputsContainer } from './Style'


export default class Filtro extends React.Component {
  render() {
    return (
    <FiltrosContainer>
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
          onChange={this.props.onChangeMaxPreco}
        />
      </InputsContainer>
      <InputsContainer>
        <p>Pesquisa por nome:</p>
        <input
          type="text"
          placeholder="Pesquisa"
          value={this.props.valueBusca}
          onChange={this.props.onChangeNomeBuscar}
        />
      </InputsContainer>
    </FiltrosContainer>
  )}
    }