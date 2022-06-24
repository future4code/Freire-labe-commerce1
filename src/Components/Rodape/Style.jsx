import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 150px;
    margin-top: 25px;
`

export const Box = styled.div`
    background: linear-gradient(rgba(219,219,219,0.25), rgba(219,219,219,0.25)),url("https://img.wattpad.com/ef43b6ff82f4f22d8163e9a3bc68b99edae84375/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7268316b743541697368702d48413d3d2d313032373332383633362e313636343533653563313439643064633836373832383331383439332e676966") no-repeat center -63px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const PCorp = styled.p`
    text-shadow: 1px 1px 5px white;
    text-align: center;
    font-weight: bold;
`
export const PRedes = styled.p`
    font-weight: bold;

`

export const RedesSociais = styled.img`
    width: 42px;
    margin: 0 8px;
    &:hover {
        transform: scale(1.2);
  }
`

export const ImgLogo = styled.img`
    cursor: pointer;
    width: 130px;
    &:hover {
        transform: scale(1.1);
     }
`

