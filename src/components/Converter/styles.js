import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 33px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h2`
  color: var(--text);
`;

export const Button = styled.button`
 background: var(--blue);
 margin: 10px;
 color: var(--white);
`;

export const InputCureency = styled.input`
    border: 1px solid var(--outline);
`;
