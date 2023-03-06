import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type HeaderStyleProps = {
  isDiet: boolean;
}

export const Container = styled(SafeAreaView) <HeaderStyleProps>`
  width: 100%;
  height: 200px;
  padding: 24px;
  ${({ theme, isDiet }) => isDiet === true ? css`
    background-color: ${theme.COLORS.GREEN_100}
  ` : css`
    background-color: ${theme.COLORS.RED_100}
  `}
`;

export const BackButton = styled(TouchableOpacity)``

export const BackIcon = styled(ArrowLeft)(() => ({
  size: 24,
}))

export const Title = styled.Text`
  align-self: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  align-self: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}  
`;