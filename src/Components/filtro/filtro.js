import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`
export class Filter extends React.Component {
    render() {
      return <FiltersContainer>
        <h2>Filtros</h2>
          <InputContainer>
            Valor mínimo:
            <input
              type="number"
              value={this.props.minFilter}
              onChange={this.props.onChangeMinFilter}
            />
          </InputContainer>
          <InputContainer>
            Valor máximo:
            <input
              type="number"
              value={this.props.maxFilter}
              onChange={this.props.onChangeMaxFilter}
            />
          </InputContainer>
          <InputContainer>
            Buscar item por nome:
            <input
              type="text"
              value={this.props.nameFilter}
              onChange={this.props.onChangeNameFilter}
            />
          </InputContainer>
      </FiltersContainer>
    }
  }