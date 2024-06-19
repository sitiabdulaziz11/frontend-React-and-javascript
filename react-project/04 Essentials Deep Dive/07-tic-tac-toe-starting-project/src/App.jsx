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
  
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
     
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
      </ol>
      {(winner || hasDraw) && <GameBoard winner={winner} onRestart={handleRestart} />}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}  />{/*turns={gameTurns}*/}{/*activePlayerSymbol={activePlayer}*/}
    </div>
    <Log turns={gameTurns}/>
  </main>
  );
}
export default App
