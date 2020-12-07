import React from 'react';

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva a sua nota" />
        <button type="submit">Criar nota</button>
      </form>
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
          </section>
        </li>
      </ul>
    </main>
  );
}

export default App;