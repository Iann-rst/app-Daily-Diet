import styled, { css } from 'styled-components/native';

export type FeedbackStyleType = 'SUCCESS' | 'FAIL'

type Props = {
  type: FeedbackStyleType;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const FeedbackView = styled.View`
  gap: 8px;
  margin-bottom: 32px;
`;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  ${({ theme, type }) => type === 'SUCCESS' && css`
    color: ${theme.COLORS.GREEN_700};
  `}

  ${({ theme, type }) => type === 'FAIL' && css`
    color: ${theme.COLORS.RED_700};
  `}
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
`;