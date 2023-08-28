import styled from "styled-components";

export const PokedexContainer = styled.div`
  header {
    border: 1px solid black;
    align-items: center;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 5px;
    }
  }

  section {
    height: 100%;
    display: inline-flex;

    flex-wrap: wrap;
    justify-content: center;

    div {
      margin: 10px;

      border: 1px solid black;
      width: 140px;
      height: 200px;

      h2 {
        text-align: center;
      }

      button {
        margin-top: 110px;
        width: auto;
        border-top: 1px solid black;
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  button{
    display: none;
  }
`
