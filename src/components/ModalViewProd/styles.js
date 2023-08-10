import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: all 0.4s;
  z-index: 10;

  h3 {
    margin: 1rem 0 2rem 0;
  }

  input,
  textarea {
    font-size: 0.9rem;
    border: none;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme.colors["gray-900"]};
    color: ${(props) => props.theme.colors["gray-300"]};
    width: 100%;
  }
  textarea {
    resize: none;
  }

  p {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

export const AreaInput = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Select = styled.select`
  background: ${(props) => props.theme.colors["gray-900"]};
  border: none;
  padding: 0.75rem 1rem;
  width: 150px;
  color: ${(props) =>
    props.default ? "#757575" : props.theme.colors["gray-300"]};
  font-size: 0.9rem;

  option {
    color: ${(props) => props.theme.colors["gray-300"]};
  }
  option:first-child {
    color: #757575;
  }
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme.colors["gray-700"]};
  padding: 24px 32px;
  border-radius: 5px;
  width: 60%;
  margin: 1rem;
  overflow-y: auto;
  max-height: 90vh;
  max-width: 740px;

  &::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do fundo da trilha da barra de rolagem */
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.colors[
        "green-300"
      ]}; /* Cor do "polegar" da barra de rolagem */
    border-radius: 5px;
  }
`;

export const ButtonConfirm = styled.button`
  border: 1px solid transparent;
  padding: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["green-700"]};
  color: ${(props) => props.theme.colors["gray-100"]};
  width: 180px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-right: 16px;

  &:hover {
    background: ${(props) => props.theme.colors["green-500"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors["gray-800"]};
    border: 1px solid ${(props) => props.theme.colors["gray-600"]};
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ButtonNot = styled.button`
  padding: 16px;
  border-radius: 4px;
  width: 120px;
  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;
  color: ${(props) => props.theme.colors["gray-100"]};
  background: none;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors["gray-900"]};
  }
`;

export const AreaClose = styled.div`
  text-align: right;
  svg {
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
