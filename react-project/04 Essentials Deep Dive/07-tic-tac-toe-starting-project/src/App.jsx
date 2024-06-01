import Player from "./assets/components/player";
function App() {
  
  //return <p>Coming soon...</p>;
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbole="X" />
        <Player initialName="Player 2" symbole="O" />
        {/*<li> this all moved to assets/components/player.jsx, to reduce redundancy and hard codeing.
          <span className="player">
            <span className="player-name">Player 1</span>
            <span className="player-symbole">X</span>
          </span>
          <button>Edit</button>
        </li>
        <li>
          <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbole">O</span>
          </span>
          <button>Edit</button>
        </li>*/}
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
