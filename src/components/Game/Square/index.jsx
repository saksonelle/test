import React from "react";

import { SquareStyled } from "./styles.js";

const Square = ({ value, onClick }) => {
  return <SquareStyled onClick={() => onClick()}>{value}</SquareStyled>;
};

export default Square;
