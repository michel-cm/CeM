import { TableStockProds } from "./TableStockProds";
import * as C from "./styles";

import { useInventarioContext } from "../../hooks/useInventarioContext";
import { Summary } from "../../components/Summary";

export const Home = () => {
  const { itensTemp } = useInventarioContext();

  return (
    <C.Container>
      <C.HeaderContainer>
        <C.HeaderContent>
          <h2>Meu Inventário</h2>
        </C.HeaderContent>
      </C.HeaderContainer>
      <Summary />
      <TableStockProds itensTemp={itensTemp} />
    </C.Container>
  );
};
