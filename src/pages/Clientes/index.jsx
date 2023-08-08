import * as C from "./styled";
import { GoPerson } from 'react-icons/go';

export const Clientes = () => {
  return (
    <C.Container>
      <h1
        style={{
          cursor: "pointer",
        }}
      >
        Página de Clientes em construção ...
      </h1>
      <GoPerson
        style={{
          width: "140px",
          height: "140px",
          cursor: "pointer",
        }}
      />
    </C.Container>
  );
};
