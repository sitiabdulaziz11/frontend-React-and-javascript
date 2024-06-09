//import { useState } from "react";

// moved to app.jsx file, start
// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];end 

export default function GameBoard({ onSelectSquare, board }) {
  // let gameBoard = initialGameBoard;

  // start moved to app.jsx filefor (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // } end

  // {/*, activePlayerSymbol*/} this line was near GameBoard function
// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//         const updatedBord = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedBord[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBord;
//     });
//     onSelectSquare()
// }
    return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{/*{() => handleSelectSquare(rowIndex, colIndex)}*/}{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
{/*<il>rendering multi dimensional array
updating object state immutablely
            <ol>
                <il></il>
                <il></il>
                <il></il>
            </ol>
        </il>
        <il></il>
<il></il>*/}