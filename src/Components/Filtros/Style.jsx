import styled from "styled-components";

export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  text-align: center;
`

export const H2Filtros = styled.h2`
  margin-bottom: 18px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  text-align: center;
  @media(max-width: 1140px) {
    width: 85%;
  }
`

export const InputEstilo = styled.input`
  width: 100%;
  margin-top: 5px;
`