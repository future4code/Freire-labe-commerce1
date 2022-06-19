import React from 'react'
import { H2Filtros, FiltrosContainer, InputsContainer, InputEstilo } from './Style'


export default class Filtro extends React.Component {
  render() {
    return (
    <FiltrosContainer>
      <H2Filtros>Filtros</H2Filtros>
      <InputsContainer>
      <label htmlFor="ValorMinimo">Valor minimo:</label>
        <InputEstilo
          name='ValorMinimo'
          id='ValorMinimo'
          type="number"
          value={this.props.valueMin}
          onChange={this.props.onChangeMinPreco}
        />
      </InputsContainer>
      <InputsContainer>
      <label htmlFor="ValorMaximo">Valor maximo</label>
        <InputEstilo
          name='ValorMaximo'
          id='ValorMaximo'
          type="number"
          value={this.props.valueMax}
          onChange={this.props.onChangeMaxPreco}
        />
      </InputsContainer>
      <InputsContainer>
      <label htmlFor="Pesquisa">Pesquisa por nome:</label>
        <InputEstilo
          name='Pesquisa'
          id='Pesquisa'
          type="text"
          placeholder="Pesquisa"
          value={this.props.valueBusca}
          onChange={this.props.onChangeNomeBuscar}
        />
      </InputsContainer>
    </FiltrosContainer>
  )}
    }