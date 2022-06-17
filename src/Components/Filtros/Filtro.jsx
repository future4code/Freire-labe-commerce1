import React from 'react'
import styled from 'styled-components';
import ListaProdutos from '../Produtos/Produtos';

const FiltrosContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  text-align: center;
`;

const InputsContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  text-align: center;
`


export default class Filtro extends React.Component {

  pegaListaFiltrada = () => {
    return this.props.produtos
      .filter((produto) => produto.valor <= (this.props.filtroMax || Infinity))
      .filter((produto) => produto.valor >= this.props.filtroMin)
      .filter((produto) => produto.nome.includes(this.props.filtroNome))
      .sort((a, b) => this.state.ordenacao === "Crescente" ? a.valor - b.valor : b.valor - a.valor)
  }

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