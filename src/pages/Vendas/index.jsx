import * as C from "./styled";
import { BsCart2 } from "react-icons/bs";

export const Vendas = () => {
  return (
    <C.Container>
      <h1
        style={{
          cursor: "pointer",
        }}
      >
        Página de Vendas em construção ...
      </h1>
      <BsCart2
        style={{
          width: "140px",
          height: "140px",
          cursor: "pointer",
        }}
      />
    </C.Container>
  );
};
