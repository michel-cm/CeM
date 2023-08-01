import { SumarryCard, SummaryContainer } from "./styles";
import {IoAppsSharp, IoFemaleOutline, IoMaleOutline, IoMaleFemaleOutline } from "react-icons/io5";

export function Summary() {
  return (
    <SummaryContainer>
      <SumarryCard variant="green">
        <header>
          <span>Estoque Total</span>
          <IoAppsSharp size={32} color="#00b37e" />
        </header>

        <strong>{5}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Feminino</span>
          <IoFemaleOutline size={32} color="#f75a68" />
        </header>

        <strong>{5}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Masculino</span>
          <IoMaleOutline size={32} color="#408aaa" />
        </header>

        <strong>{5}</strong>
      </SumarryCard>
      <SumarryCard>
        <header>
          <span>Unissex</span>
          <IoMaleFemaleOutline size={32} color="#F7F7F7" />
        </header>

        <strong>{5}</strong>
      </SumarryCard>
    </SummaryContainer>
  );
}
