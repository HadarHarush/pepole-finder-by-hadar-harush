import styled from "styled-components";

export const UserList = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    padding: 0px 20px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > *:not(last-child) {
    margin-inline-end: 8px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-itmes: center;
  border-radius: 4px;
  padding: 5px 20px;
  padding-inline-end: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover: {
    background-color: rgba(255, 255, 255, 0.15);
  }
  & > *:not(last-child) {
    margin-inline-end: 0.3rem;
  }
`;
export const SearchInput = styled.input`
  font-size: 16px;
  flex-grow: 1;
  background: unset;
  outline: unset;
  border: unset;
  color: rgb(255, 255, 255);
  &::placeholder {
    font-weight: bold;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 500px;
  margin-block-start: 30px;
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: unset;
  }
`;
// height: calc(100vh - 270px);

export const User = styled.div`
  display: flex;
  > *:not(last-child) {
    margin-inline-end: 25px;
  }
  &:hover {
    .icon-button-wrapper {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    > *:not(last-child) {
      margin-inline-end: unset;
    }
    flex-direction: column;
    align-items: center;
    > *:not(last-child) {
      margin-bottom: 0.2rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;
