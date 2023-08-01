import { useEffect } from "react";
import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

import { priceFormater } from "../../../helpers/formatter";

export function TableStockProds({ itensTemp }) {
  useEffect(() => {
    console.log(itensTemp);
  }, [itensTemp]);

  function verifyStockColor(stock) {
    if (stock > 1) {
      return "green";
    } else if (stock === 1) {
      return "yellow";
    } else {
      return "red";
    }
  }
  return (
    <C.InventarioList>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Tamanho</th>
            <th>Estoque</th>
            <th>Disponivel</th>

            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itensTemp &&
            itensTemp.length > 0 &&
            itensTemp.map((item) => {
              return (
                <tr key={item.cod}>
                  <td>{item.cod}</td>
                  <td>{item.nome}</td>
                  <td>{priceFormater.format(item.preco)}</td>
                  <td>{item.categoria}</td>
                  <td>{item.tamanho}</td>
                  <td>{item.estoque}</td>

                  <td>
                    {" "}
                    <C.Status
                      statuscolor={verifyStockColor(item.estoque)}
                    ></C.Status>
                  </td>
                  <td>
                    {" "}
                    <C.AreaIcon>
                      <BsPencilSquare
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          opacity: 0.75,
                        }}
                      />
                    </C.AreaIcon>
                  </td>
                  {
                    <td>
                      {" "}
                      <C.AreaIcon>
                        <BsFillEyeFill
                          style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            opacity: 0.75,
                          }}
                        />
                      </C.AreaIcon>
                    </td>
                  }
                  <td>
                    {" "}
                    <C.AreaIcon>
                      <BsFillTrashFill
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          opacity: 0.75,
                        }}
                      />
                    </C.AreaIcon>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </C.InventarioList>
  );
}
