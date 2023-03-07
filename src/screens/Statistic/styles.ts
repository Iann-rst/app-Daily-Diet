import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InfoDietStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: InfoDietStyleProps;
}

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`;

export const Title = styled.Text`
margin-bottom: 23px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD}
  `}
`;

export const InfoView = styled.View`
  width: 100%;
  
  max-height: 107px;
  min-height: 107px;

  flex-direction: row;
  align-items: center;
`;

export const InfoMeals = styled(View) <Props>`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  align-items: center;
  justify-content: center;
`;

export const InfoMealsTitle = styled.Text`
${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const InfoMealsSubTitle = styled.Text`
${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_600};
  font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center;
`;