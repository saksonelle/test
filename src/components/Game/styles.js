import styled from "styled-components";

export const GameStyled = styled.div`
  background: ${({ theme }) => theme.secondary_color};
  padding: 15px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;
