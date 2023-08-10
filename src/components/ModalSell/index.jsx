import { useState } from "react";
import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useInventarioContext } from "../../hooks/useInventarioContext";

export function ModalSell({ setModal }) {
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
        <h3>Realizar Venda</h3>
      
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
