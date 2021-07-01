import styled from "styled-components";

export const HeaderStyled = styled.div`
  background: ${({ theme }) => theme.background};
  font-size: 26px;
  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;
