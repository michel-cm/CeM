import styled from "styled-components";

export const InventarioList = styled.div`
  flex: 1;
  overflow: auto;
  box-shadow: ${(props) =>
    props.theme.title === "dark"
      ? "none"
      : "0 50px 50px 0px rgba(0, 0, 0, 0.10)"};
  padding: 10px 32px 0 32px;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    border-collapse: separate;
    border-spacing: 0 0.4rem;

    th {
      background-color: ${(props) => props.theme.colors.th};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.colors.td};
      padding: 0.6rem 1rem;
      font-size: 0.875rem;

      &:first-child {
        width: 10%;
        padding-left: 1rem;
      }

      &:last-child {
        padding-right: 1rem;
      }
    }
  }
`;

export const AreaIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.85;
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
};

export const Status = styled.span`
  display: flex;
  align-items: center;
  
  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.statuscolor]]};
  }
`;
