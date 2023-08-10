import { useState } from "react";
import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useInventarioContext } from "../../hooks/useInventarioContext";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export function ModalViewProd({ setModal, idProdForView }) {
  const { products, updateProd } = useInventarioContext();

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

  const handleCloseModal = (event) => {
    if (event.target !== event.currentTarget) {
      return; // Ignorar o fechamento do modal
    }
    event.stopPropagation();
    setModal(false);
  };

  const getProdForId = () => {
    const filtered = products.filter((prod) => prod.id == idProdForView);
    setProduto(filtered[0]);
  };

  const handleUpdateProd = async () => {
    await updateProd(idProdForView, produto).then(() => {
      notify();
    });
  };

  useEffect(() => {
    console.log(idProdForView);
    getProdForId();
  }, [idProdForView]);

  const notify = () => toast.success("Atualizado com sucesso");

  return (
    <C.Container onClick={handleCloseModal}>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
        <h3>{produto.nome}</h3>
        <C.AreaInput>
          <div>
            <p>Produto</p>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={produto.nome || ""}
              onChange={(e) =>
                setProduto((state) => ({ ...state, nome: e.target.value }))
              }
            />
          </div>
          <C.InputRow>
            <div>
              <p>Código</p>
              <input
                type="text"
                placeholder="Código"
                value={produto.cod || ""}
                onChange={(e) =>
                  setProduto((state) => ({ ...state, cod: e.target.value }))
                }
              />
            </div>
            <div>
              <p>Preço</p>
              <input
                type="number"
                placeholder="Preço do produto"
                value={produto.preco || ""}
                onChange={(e) =>
                  setProduto((state) => ({ ...state, preco: +e.target.value }))
                }
              />
            </div>
            <div>
              <p>Quantidade</p>
              <input
                type="number"
                placeholder="Quantidade"
                value={produto.quantidade || ""}
                onChange={(e) =>
                  setProduto((state) => ({
                    ...state,
                    quantidade: +e.target.value,
                  }))
                }
              />
            </div>
          </C.InputRow>
          <C.InputRow>
            <div>
              <p>Tamanho</p>
              <C.Select
                default={produto.tamanho === "Tamanho"}
                value={produto.tamanho || ""}
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
            </div>
            <div>
              <p>Categoria</p>
              <C.Select
                default={produto.categoria === "Categoria"}
                value={produto.categoria || ""}
                onChange={(e) =>
                  setProduto((state) => ({
                    ...state,
                    categoria: e.target.value,
                  }))
                }
              >
                <option value="Categoria">Categoria</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Unissex">Unissex</option>
              </C.Select>
            </div>
          </C.InputRow>
          <div>
            <p>Descrição</p>
            <textarea
              rows="5"
              placeholder="Descrição"
              value={produto.descricao || ""}
              onChange={(e) =>
                setProduto((state) => ({ ...state, descricao: e.target.value }))
              }
            ></textarea>
          </div>
          <div>
            <p>Observação</p>
            <textarea
              rows="5"
              placeholder="Observação"
              value={produto.observacao || ""}
              onChange={(e) =>
                setProduto((state) => ({
                  ...state,
                  observacao: e.target.value,
                }))
              }
            ></textarea>
          </div>
        </C.AreaInput>
        <div>
          <C.ButtonConfirm
            onClick={handleUpdateProd}
            disabled={
              produto.nome &&
              produto.quantidade &&
              produto.tamanho !== "Tamanho" &&
              produto.categoria !== "Categoria"
                ? false
                : true
            }
          >
            Atualizar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal} title="Fechar modal">
            Cancelar
          </C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
