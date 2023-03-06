import styled, { css } from 'styled-components/native';


export const Content = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin-top: -20px;
`

export const Form = styled.View`
  flex: 1;
`;


