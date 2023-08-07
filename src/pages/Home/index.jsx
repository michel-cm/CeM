import { TableStockProds } from "./TableStockProds";
import * as C from "./styles";
import { useState } from "react";
import primeiroEstoque from "../../assets/primeiro-produto.png";

import { useInventarioContext } from "../../hooks/useInventarioContext";
import { Summary } from "../../components/Summary";
import { ModalAddNewProd } from "../../components/ModalAddNewProd";
import { Search } from "../../components/Search";

export const Home = () => {
  const [modalAddNewProd, setModalAddNewProd] = useState(false);
  const { products } = useInventarioContext();

  return (
    <C.Container>
      {products.length ? (
        <>
          <C.HeaderContainer>
            <C.HeaderContent>
              <h2>Meu Inventário</h2>
            </C.HeaderContent>
          </C.HeaderContainer>
          <Summary />
          <C.AreaSearch>
            <Search placeholder="Digite o nome do produto" />
          </C.AreaSearch>

          <TableStockProds itensTemp={products} />

          <C.BtnOpenModalAddProd onClick={() => setModalAddNewProd(true)}>
            Novo Produto
          </C.BtnOpenModalAddProd>
        </>
      ) : (
        <C.AreaPrimeiroProduto>
          <h2>Ainda não há produtos cadastrados no seu inventário</h2>
          <h3>Comece cadastrando seu primeiro produto</h3>
          <img src={primeiroEstoque} width={280} />

          <C.BtnPrimeiroProdAdd onClick={() => setModalAddNewProd(true)}>
            Cadastre seu primeiro produto
          </C.BtnPrimeiroProdAdd>
        </C.AreaPrimeiroProduto>
      )}

      {modalAddNewProd && <ModalAddNewProd setModal={setModalAddNewProd} />}
    </C.Container>
  );
};
