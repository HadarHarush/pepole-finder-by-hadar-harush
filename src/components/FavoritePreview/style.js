import { Card } from "@material-ui/core";
import styled from "styled-components";

export const MyCard = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    padding: 20px;
    > .content {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      > *:not(last-child) {
        margin-bottom: 10px;
      }
    }
    @media (max-width: 450px) {
      width: 90%;
    }
  }
`;
