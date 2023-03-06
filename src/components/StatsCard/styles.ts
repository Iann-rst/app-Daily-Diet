import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_600};
  font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;