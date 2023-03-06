import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 132px;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(TouchableOpacity)``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  
`;