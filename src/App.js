import { useEffect, useState } from "react";
import estilos from "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        setProdutos(dados);
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getProdutos();
  }, []);

  return (
    <div className="listaProdutos">
      {produtos.map(({ id, title, price, image }) => (
        <div className="caixa" key={id}>
          <img className="foto" src={image} />
          <h1>{title}</h1>
          <p>
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
