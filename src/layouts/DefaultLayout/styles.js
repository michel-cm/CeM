import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .header-mobile {
    display: none;
  }
  @media (min-width: 1024px) {
    & {
      padding-left: 150px;
    }
  }
  @media (max-width: 1023px) {
    .header-mobile {
      display: block;
    }
  }
`;
