import { TouchableWithoutFeedback } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(TouchableWithoutFeedback)``

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin-top: -20px;
  padding: 24px;
`;

export const LabelDiet = styled.Text`
  margin-top: 20px;
  margin-bottom: 5px;
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_600};
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Groups = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;


