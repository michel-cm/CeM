import { TableStockProds } from "./TableStockProds";
import * as C from "./styles";
import { useState } from "react";
import primeiroEstoque from "../../assets/primeiro-produto.png";
import lupaErro from "../../assets/lupa-erro.png";

import { useInventarioContext } from "../../hooks/useInventarioContext";
import { Summary } from "../../components/Summary";
import { ModalAddNewProd } from "../../components/ModalAddNewProd";
import { Search } from "../../components/Search";
import { ModalViewProd } from "../../components/ModalViewProd";
import { ModalSell } from "../../components/ModalSell";

export const Home = () => {
  const [modalAddNewProd, setModalAddNewProd] = useState(false);
  const [modalViewProd, setModalViewProd] = useState(false);
  const [modalSeel, setModalSell] = useState(false);
  const [idProdForView, setIdProdForView] = useState("");
  const { products } = useInventarioContext();

  const [search, setSearch] = useState("");

  function viewProd(idProd) {
    setIdProdForView(idProd);
    setModalViewProd(true);
  }

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
              <TableStockProds viewProd={viewProd} itensTemp={filteredList} />
            ) : (
              <C.AreaLupaErro>
                <h2>Ops, sua busca não encontrou nenhum resultado</h2>
                <img src={lupaErro} width={200} />
              </C.AreaLupaErro>
            )
          ) : (
            <TableStockProds viewProd={viewProd} itensTemp={products} />
          )}

          <C.BtnOpenModalVenda onClick={() => setModalSell(true)}>
            Realizar Venda
          </C.BtnOpenModalVenda>
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
      {modalViewProd && (
        <ModalViewProd
          idProdForView={idProdForView}
          setModal={setModalViewProd}
        />
      )}
      {modalSeel && (
        <ModalSell         
          setModal={setModalSell}
        />
      )}
    </C.Container>
  );
};
