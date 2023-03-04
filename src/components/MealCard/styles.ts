import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';


export type MealTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: MealTypeStyleProps;
}


export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 14px 16px;
  max-height: 50px;
  min-height: 50px;

  align-items: center;
  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  margin-bottom: 8px;
`;

export const TextLeftMeal = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_700};
      font-size: ${theme.FONT_SIZE.XS}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  line-height: 15.6px;
`;

export const MealTitle = styled.Text`
  flex: 1;
  
  margin-left: 10px;
  margin-right: 20px;
  padding-left: 10px;

  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
  line-height: 20.8px;


  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_600};
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Status = styled(View) <Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`;