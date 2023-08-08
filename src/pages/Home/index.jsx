import { TableStockProds } from "./TableStockProds";
import * as C from "./styles";
import { useState } from "react";
import primeiroEstoque from "../../assets/primeiro-produto.png";
import lupaErro from "../../assets/lupa-erro.png";

import { useInventarioContext } from "../../hooks/useInventarioContext";
import { Summary } from "../../components/Summary";
import { ModalAddNewProd } from "../../components/ModalAddNewProd";
import { Search } from "../../components/Search";

export const Home = () => {
  const [modalAddNewProd, setModalAddNewProd] = useState(false);
  const { products } = useInventarioContext();

  const [search, setSearch] = useState("");

  const filteredList =
    search.length > 0
      ? products.filter((filtered) =>
          filtered.nome.toLowerCase().includes(search)
        )
      : [];

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
            <Search
              placeholder="Digite o nome do produto"
              state={search}
              setSearch={setSearch}
            />
          </C.AreaSearch>

          {search.length ? (
            filteredList.length ? (
              <TableStockProds itensTemp={filteredList} />
            ) : (
              <C.AreaLupaErro>
                <h2>Ops, sua busca não encontrou nenhum resultado</h2>
                <img src={lupaErro} width={200} />
              </C.AreaLupaErro>
            )
          ) : (
            <TableStockProds itensTemp={products} />
          )}

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
