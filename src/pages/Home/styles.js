import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
