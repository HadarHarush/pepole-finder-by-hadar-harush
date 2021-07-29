import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
`;

export const FavoritesList = styled.ul`
  overflow-y: scroll;
  padding-bottom: 30px;
  max-width: 1000px;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    row-gap: unset;
    column-gap: unset;
    > *:not(last-child) {
      margin-bottom: 10px;
    }
  }
`;
