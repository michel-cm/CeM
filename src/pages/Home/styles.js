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

export const BtnOpenModalAddProd = styled.button`
  background: ${(props) => props.theme.colors["green-500"]};
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  color: ${(props) => props.theme.colors["gray-300"]};
  position: fixed;
  right: 16px;
  bottom: 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${(props) => props.theme.colors["green-700"]};
  }
`;

export const AreaSearch = styled.div`
  padding: 32px 32px 0 32px;
`;

export const AreaPrimeiroProduto = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px 0;
  color: ${(props) => props.theme.colors.text};
`;

export const BtnPrimeiroProdAdd = styled.button`
  background: ${(props) => props.theme.colors["green-500"]};
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  color: ${(props) => props.theme.colors["gray-100"]};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.colors["green-700"]};
  }
`;