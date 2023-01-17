import React from "react";
import { Fragment } from "react";
import Square from "./components/Square";

const Board = () => {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );
};

export default Board
