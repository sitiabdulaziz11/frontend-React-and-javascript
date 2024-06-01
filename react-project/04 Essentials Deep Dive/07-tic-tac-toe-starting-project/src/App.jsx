import Player from "./assets/components/player";
function App() {
  
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player name="Player 1" symbole="X" />
        <Player name="Player 2" symbole="O" />
      </ol>
    </div>
  </main>
  
}
    {/* return (
      inserted in index.html file above <div id="root"></div>
      <header>
      <img src="" alt="" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
    )*/}

export default App
