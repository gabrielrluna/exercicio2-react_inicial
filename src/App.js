import { useEffect, useState } from "react";
import serverApi from "./api/servidor-api";

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
    <div>
      {produtos.map(
        ({ id, title, price, image }) => (
          (id = { id }),
          (image = { image }),
          (title = { title }),
          (price = { price })
        )
      )}
    </div>
  );
}

export default App;
