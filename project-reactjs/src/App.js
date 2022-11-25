
import { FiSearch } from 'react-icons/fi';
import './style.css';
import { useState } from 'react';
import api from './services/api.js'

function App() {


  const [input, setInput] = useState('');

  const [cep, setCep] = useState({});


  async function search() {
    if (input === "") {
      alert("Preencha um cep");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }
    catch {
      alert("Erro ao buscar");
      setInput("");
    }


  }

  return (
    <div className="container ">
      <header >
        <h1 className="title"> Buscador de CEP</h1>
      </header>

      <div className="containerInput">

        <input type="text" typeof="text" placeholder="Digite um CEP..." value={input} onChange={(e) => setInput(e.target.value)} />

        <button className="buttonSearch" onClick={search}>
          <FiSearch size={25} color="#fff" />
        </button>

      </div>


      {Object.keys(cep).length > 0 && (

        <main className='main'>

          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}


    </div>
  );
}

export default App;
