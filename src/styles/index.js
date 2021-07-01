import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;
