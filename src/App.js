import React from "react";
import { Fragment, useState } from "react";
import Square from "./components/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const clickHandler = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares)
  }

  return (
    <React.Fragment>
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

export default Board
