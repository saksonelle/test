import styled from "styled-components";

export const BoardStyled = styled.div`
  background: ${({ theme }) => theme.secondary_color};
  border: 5px solid ${({ theme }) => theme.accent_color};
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

export const GameStatus = styled.h2`
  text-align: center;
`;

export const BoardRow = styled.div`
  display: flex;
  height: 60px;
`;
