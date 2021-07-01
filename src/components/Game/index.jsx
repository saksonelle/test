import React from "react";

import Board from "./Board";
import { GameStyled } from "./styles.js";

const Game = () => {
  return (
    <GameStyled>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </GameStyled>
  );
};

export default Game;
