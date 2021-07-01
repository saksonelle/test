import React, { useState } from "react";

import Square from "./../Square";
import { DIMENTION } from "./../../../utils/constants";
import { BoardStyled, BoardRow, GameStatus } from "./styles.js";

const Board = () => {
  const [squares, setSquares] = useState(
    Array(DIMENTION * DIMENTION).fill(null)
  );
  const [cells, setCells] = useState([]);

  const onClickSquareHandler = (num) => {
    const extractedSquares = squares.slice();
    extractedSquares[num] = "X";
    setSquares(extractedSquares);

    preparCoord(num);
  };

  const preparCoord = (num) => {
    const clicked = cells.find(el => el.id == num);
    if (clicked) {
      return;
    }

    const checkedNum = num < 10 ? "0" + num: num;

    const splitedNum = checkedNum.toString().split("");

    const [x, y] = splitedNum;

    const cell = { x, y, clicked: true, id: num };

    setCells([...cells, cell]);
    checkRow(cell);
  };

  const checkRow = ({ x, y, clicked, id: num }) => {
    console.log("setCells", { x, y, clicked, id: num });
    let cols = [];
    let rows = { row: { filled: false, 0: [] } };

    rows.row[x].push({ x, y, clicked, id: num });
    console.log("setCells", rows);

    for (let i = x; i < DIMENTION; i++) {

      for (let j = 0; j < DIMENTION; j++) {
      }
    }
  };

  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onClickSquareHandler(i)} />
  );

  const status = "You will definitely win!";

  return (
    <>
      <GameStatus>{status}</GameStatus>
      <BoardStyled>
        <BoardRow>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
        </BoardRow>

        <BoardRow>
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
          {renderSquare(9)}
        </BoardRow>

        <BoardRow>
          {renderSquare(10)}
          {renderSquare(11)}
          {renderSquare(12)}
          {renderSquare(13)}
          {renderSquare(14)}
        </BoardRow>

        <BoardRow>
          {renderSquare(15)}
          {renderSquare(16)}
          {renderSquare(17)}
          {renderSquare(18)}
          {renderSquare(19)}
        </BoardRow>

        <BoardRow>
          {renderSquare(20)}
          {renderSquare(21)}
          {renderSquare(22)}
          {renderSquare(23)}
          {renderSquare(24)}
        </BoardRow>
      </BoardStyled>
    </>
  );
};

export default Board;
