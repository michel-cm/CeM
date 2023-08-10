import { styled, css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

export const SumarryCard = styled.div`
  background: ${(props) => props.theme.colors.summaryCard};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.summaryCardText};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.summaryCardText};
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme.colors["green-700"]};
      header,
      strong {
        color: #fff;
      }
    `}
`;
