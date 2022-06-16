import React from 'react'
import styled from 'styled-components';
import App from '../../App';

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
    render() {
      return <FiltrosContainer>
        <h2>Filtros</h2>
          <InputsContainer>
            Valor mínimo:
            <input
              type="number"
              value={this.props.minFiltro}
              onChange={this.props.onChangeMinFiltro}
            />
          </InputsContainer>
          <InputsContainer>
            Valor máximo:
            <input
              type="number"
              value={this.props.maxFiltro}
              onChange={this.props.onChangeMaxFiltro}
            />
          </InputsContainer>
          <InputsContainer>
            Buscar item por nome:
            <input
              type="text"
              value={this.props.nameFiltro}
              onChange={this.props.onChangeNameFiltro}
            />
          </InputsContainer>
      </FiltrosContainer>
    }
  }