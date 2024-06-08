import { useState } from "react";

import Player from "./assets/components/player";
import GameBoard from "./assets/components/GameBoard.jsx";
import Log from "./assets/components/Log.jsx";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  // "A" let currentPlayer = 'X';

  //     if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
  //       currentPlayer = 'O';
  //     } we can replace code "A" with the following code

  const activePlayer = deriveActivePlayer(gameTurns);
  
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curactivePlayer) => curactivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      // "B"let currentPlayer = 'X';

      // if (prevTurns.length > 0 &&prevTurns[0].player === 'X') {
      //   currentPlayer = 'O';
      // } we can replace code "B" with the following code
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns

      ];

      return updatedTurns;
    });
  }

  //return <p>Coming soon...</p>;
  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbole="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player 2" symbole="O" isActive={activePlayer === 'O'} />
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
      <GameBoard onSelectSquare={handleSelectSquare}turns={gameTurns}  />{/*activePlayerSymbol={activePlayer}*/}
    </div>
    <Log turns={gameTurns}/>
  </main>
  );
}
    {/* return (
      inserted in index.html file above <div id="root"></div>
      <header>
      <img src="" alt="" />
      <h1>React Tic-Tac-Toe</h1>
    </header> lifting state up, avoiding intersecting of states, perfer computed value and avoid unnecessary state management, deriving state from props
    )*/}

export default App
