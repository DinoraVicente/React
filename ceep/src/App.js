import React from 'react';
import ListaDeNotas from './components/listaDeNotas';

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva a sua nota" />
        <button type="submit">Criar nota</button>
      </form>
      <ListaDeNotas />
    </main>
  );
}

export default App;