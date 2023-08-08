import { SumarryCard, SummaryContainer } from "./styles";
import { useInventarioContext } from "../../hooks/useInventarioContext";

import {
  IoAppsSharp,
  IoFemaleOutline,
  IoMaleOutline,
  IoMaleFemaleOutline,
} from "react-icons/io5";

export function Summary() {
  const { products } = useInventarioContext();
  const prodsFeminino = products.filter(
    (prod) => prod.categoria === "Feminino"
  );
  const prodsMasculino = products.filter(
    (prod) => prod.categoria === "Masculino"
  );
  const prodsUnissex = products.filter((prod) => prod.categoria === "Unissex");

  return (
    <SummaryContainer>
      <SumarryCard variant="green">
        <header>
          <span>Estoque Total</span>
          <IoAppsSharp size={32} color="#00b37e" />
        </header>

        <strong>{products.length}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Feminino</span>
          <IoFemaleOutline size={32} color="#f75a68" />
        </header>

        <strong>{prodsFeminino.length}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Masculino</span>
          <IoMaleOutline size={32} color="#408aaa" />
        </header>

        <strong>{prodsMasculino.length}</strong>
      </SumarryCard>
      <SumarryCard>
        <header>
          <span>Unissex</span>
          <IoMaleFemaleOutline size={32} color="#F7F7F7" />
        </header>

        <strong>{prodsUnissex.length}</strong>
      </SumarryCard>
    </SummaryContainer>
  );
}
