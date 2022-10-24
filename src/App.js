import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => console.log(response.data));
  }

  return (
    <>
      <h1>{usuario}</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
