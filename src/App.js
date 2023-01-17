import React from "react";
import { Fragment, useState } from "react";
import Square from "./components/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <React.Fragment>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </React.Fragment>
  );
};

export default Board
