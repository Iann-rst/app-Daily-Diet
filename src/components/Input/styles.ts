import styled, { css } from "styled-components/native";

type Props = {
  textArea: boolean;
}

export const Container = styled.View`
  width: 100%;
  gap: 5px;
  margin-top: 20px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_600};
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputText = styled.TextInput<Props>`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  ${({ textArea }) => textArea === true ? css`
    height: 120px;
  ` : css`
    height: 48px;
  `}
`;