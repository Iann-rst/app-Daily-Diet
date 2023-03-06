import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';


type StatCardTypeStylesProps = {
  type: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const StatCard = styled.View<StatCardTypeStylesProps>`
  width: 100%;
  padding: 8px 8px 20px 16px;
  margin: 32px 0px;
  align-items: flex-end;
  border-radius: 8px;

  ${({ theme, type }) => type ? css`
    background-color: ${theme.COLORS.GREEN_100};
  ` : css`
    background-color: ${theme.COLORS.RED_100};
  
  `}
`;

export const StatCardButton = styled(TouchableOpacity)``;

export const StatCardButtonIcon = styled(ArrowUpRight).attrs(() => ({
  size: 24,
}))``;

export const StatCardTitle = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE['2XL']}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_700};
  `}
  align-self: center;
`;

export const StatCardSubTitle = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_600};
  `}
  align-self: center;
`;

export const TitleMeals = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 8px;
`;

export const TitleListMeals = styled.Text`
${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-bottom: 8px;
`;