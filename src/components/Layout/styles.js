import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Card = styled.div`
  background: var(--white);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 33px 33px;
  margin: auto;
  max-width: 980px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 48px;
  align-items: center;
  color: #333333;
  display: flex;
  justify-content: center;
`;
