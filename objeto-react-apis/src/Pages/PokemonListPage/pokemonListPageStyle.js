import styled from "styled-components";

export const RenderList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 20px;
  padding: 5vh 5vw;

  img {
    width: 193px;
    height: 193px;
  }
`;

/* export const Container = styled.div`
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
 */
