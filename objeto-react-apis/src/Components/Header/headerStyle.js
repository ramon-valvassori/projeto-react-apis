import styled from "styled-components";

export const HeadersContainer = styled.div`
  height: 160px;

  display: grid;
  grid-template-columns: repeat(5,1fr);
  /* row-gap: 40px;
  column-gap: 20px; */

  background-color: white;
`;

/* export const HeaderBranca = styled.div`
  width: 197px;
  height: 50px;
  opacity: 0;
`; */

export const HeaderImgContainer = styled.img`
  width: 307px;
  grid-column: 3/4;
  height: 113px;
  margin-top: 5%;
  `

export const ButtonContainer = styled.div`
    grid-column: 5/6;
    display: flex;
    align-items: center;
    justify-content: center;
  button {
    width: 257px;
    height: 74px;
    padding: 4px 10px;
    border-radius: 8px;
    background: #33a4f5;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
    cursor: pointer;
    color: #fff;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    vertical-align: center;
  }
`;
