import styled from "styled-components";

export const SearchInput = styled.input`
  border: 0;
  border-radius: 5px;
  width: 380px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.input};
  outline: 0;
  padding: 0px 0px 0px 16px;
  color: ${(props) => props.theme.colors["gray-300"]};
  font-size: 15px;
  box-shadow: ${(props) =>
    props.theme.title === "dark"
      ? "none"
      : "0 50px 50px 0px rgba(0, 0, 0, 0.1)"};

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
`;

export const AreaInput = styled.div`
  display: flex;
  align-items: center;
`;

export const IconSearch = styled.div`
  margin-left: -50px;
  opacity: 0.7;
`;
