
import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container ">
      <header className="title">
        <h1> Buscador de CEP</h1>
      </header>

      <div className="containerUnput">
        <input type="text" typeof="text" placeholder="Digite um CEP..." />
        <button className="buttonSearch">Procurar
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className='main'>
        <h2>CEP</h2>
        <span>Rua Teste</span>
        <span>Bairro</span>
        <span>Cidade - SC</span>
      </main>

    </div>
  );
}

export default App;
