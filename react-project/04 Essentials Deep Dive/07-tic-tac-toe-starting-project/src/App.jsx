import { useState } from "react";

import Player from "./assets/components/player";
import GameBoard from "./assets/components/GameBoard.jsx";
import Log from "./assets/components/Log.jsx";
import  { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./assets/components/GameOver.jsx";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

// const WINNING_COMBINATIONS = [
//   [
//     { row: 0, col: 0 },
//     { row: 0, col: 1 },
//     { row: 0, col: 2 },
//   ]
// ];

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if  (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol
    ) {
        winner = players[firstSquareSymbol];
    }

  }
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const [haswinner, setHaswinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState('X');

  // "A" let currentPlayer = 'X';

  //     if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
  //       currentPlayer = 'O';
  //     } we can replace code "A" with the following code
  
  
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlPlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }
// when not to liftState up
  //return <p>Coming soon...</p>;
  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
        initialName={PLAYERS.X}
        symbole="X" isActive={activePlayer === 'X'}
        onChangeName={handlPlayerNameChange}
        />
        <Player
        initialName={PLAYERS.O}
        symbole="O" isActive={activePlayer === 'O'}
        onChangeName={handlPlayerNameChange}
        />
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
      {/*{winner && <p>You won, {winner}!</p>} first was this */}
      {(winner || hasDraw) && <GameBoard winner={winner} onRestart={handleRestart} />}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}  />{/*turns={gameTurns}*/}{/*activePlayerSymbol={activePlayer}*/}
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
