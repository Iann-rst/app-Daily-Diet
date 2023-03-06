import styled, { css } from "styled-components/native";

/**
 * DEFAULT - TextInput padrão
 * PRIMARY - TextInput com uma altura maior
 * SECONDARY - TextInput com o largura reduzida
 */

export type InputStyleProps = 'DEFAULT' | 'PRIMARY' | 'SECONDARY'

type InputStyle = {
  type: InputStyleProps;
}

export const Container = styled.View<InputStyle>`
  ${({ type }) => type === 'DEFAULT' && css`
    width: 100%;
  `}

${({ type }) => type === 'PRIMARY' && css`
    width: 100%;
`}

${({ type }) => type === 'SECONDARY' && css`
    width: 48%;
  `}
  
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

export const InputText = styled.TextInput<InputStyle>`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  ${({ type }) => type === 'PRIMARY' && css`
    height: 120px;
  `}

  ${({ type }) => type === 'DEFAULT' && css`
    height: 48px;
  `}

  ${({ type }) => type === 'SECONDARY' && css`
    height: 48px;
  `}
`;