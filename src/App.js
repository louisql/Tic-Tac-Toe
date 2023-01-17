import React from "react";
import { Fragment, useState } from "react";
import Square from "./components/Square";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const clickHandler = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares]; 

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares)
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player " + (xIsNext ? "X" : "O")
  }

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() =>clickHandler(0)} /> {/* using arrow function to fix the infinite loop created by calling the function with (0) instead of just pointing to it */}
        <Square value={squares[1]} onSquareClick={() =>clickHandler(1)} />
        <Square value={squares[2]} onSquareClick={() =>clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() =>clickHandler(3)} />
        <Square value={squares[4]} onSquareClick={() =>clickHandler(4)} />
        <Square value={squares[5]} onSquareClick={() =>clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() =>clickHandler(6)} />
        <Square value={squares[7]} onSquareClick={() =>clickHandler(7)} />
        <Square value={squares[8]} onSquareClick={() =>clickHandler(8)} />
      </div>
    </React.Fragment>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board
