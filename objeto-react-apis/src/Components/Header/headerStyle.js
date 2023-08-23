import styled from "styled-components";

export const HeadersContainer = styled.div`
  height: 160px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderImgContainer = styled.div`
  width: 307px;
  height: 113px;
`;

export const ButtonContainer = styled.div`
  button {
    flex-shrink: 0;
    width: 287px;
    height: 74px;
    padding: 4px 10px;
    border-radius: 8px;

    color: #fff;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    background: #33a4f5;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
  }
`;
