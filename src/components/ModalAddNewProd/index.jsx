import { useState } from "react";
import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useInventarioContext } from "../../hooks/useInventarioContext";

export function ModalAddNewProd({ setModal }) {
  const { addNewProd } = useInventarioContext();

  const [produto, setProduto] = useState({
    cod: "",
    nome: "",
    preco: "",
    quantidade: "",
    tamanho: "Tamanho",
    categoria: "Categoria",
    descricao: "",
    observacao: "",
  });

  console.log(produto);

  const handleCloseModal = (event) => {
    if (event.target !== event.currentTarget) {
      return; // Ignorar o fechamento do modal
    }
    event.stopPropagation();
    setModal(false);
  };

  async function handleAddNewProd(produto) {
    await addNewProd(produto);
  }

  return (
    <C.Container onClick={handleCloseModal}>
      <C.Modal className="modal-internal">
        <C.AreaClose>
          <BsFillXCircleFill
            title="Fechar modal"
            onClick={() => setModal(false)}
            style={{
              cursor: "pointer",
            }}
          />
        </C.AreaClose>
        <h3>Cadastrar novo produto</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Nome do Produto"
            value={produto.nome}
            onChange={(e) =>
              setProduto((state) => ({ ...state, nome: e.target.value }))
            }
          />
          <C.InputRow>
            <input
              type="text"
              placeholder="Código"
              value={produto.cod}
              onChange={(e) =>
                setProduto((state) => ({ ...state, cod: e.target.value }))
              }
            />
            <input
              type="number"
              placeholder="Preço do produto"
              value={produto.preco}
              onChange={(e) =>
                setProduto((state) => ({ ...state, preco: +e.target.value }))
              }
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={produto.quantidade}
              onChange={(e) =>
                setProduto((state) => ({
                  ...state,
                  quantidade: +e.target.value,
                }))
              }
            />
          </C.InputRow>
          <C.InputRow>
            <C.Select
              default={produto.tamanho === "Tamanho"}
              value={produto.tamanho}
              onChange={(e) =>
                setProduto((state) => ({ ...state, tamanho: e.target.value }))
              }
            >
              <option value="Tamanho">Tamanho</option>
              <option value="PP">PP</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
              <option value="XG">XG</option>
              <option value="XXG">XXG</option>
            </C.Select>
            <C.Select
              default={produto.categoria === "Categoria"}
              value={produto.categoria}
              onChange={(e) =>
                setProduto((state) => ({ ...state, categoria: e.target.value }))
              }
            >
              <option value="Categoria">Categoria</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Unissex">Unissex</option>
            </C.Select>
          </C.InputRow>
          <textarea
            rows="5"
            placeholder="Descrição"
            value={produto.descricao}
            onChange={(e) =>
              setProduto((state) => ({ ...state, descricao: e.target.value }))
            }
          ></textarea>
          <textarea
            rows="5"
            placeholder="Observação"
            value={produto.observacao}
            onChange={(e) =>
              setProduto((state) => ({ ...state, observacao: e.target.value }))
            }
          ></textarea>
        </C.AreaInput>
        <div>
          <C.ButtonConfirm
            onClick={() => handleAddNewProd(produto)}
            disabled={
              produto.nome &&
              produto.quantidade &&
              produto.tamanho !== "Tamanho" &&
              produto.categoria !== "Categoria"
                ? false
                : true
            }
          >
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal} title="Fechar modal">
            Cancelar
          </C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
