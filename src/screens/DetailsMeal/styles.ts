import styled, { css } from 'styled-components/native';

export type DietProps = 'IN' | 'OUT';

type Props = {
  type: DietProps;
}

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin-top: -20px;
  padding: 24px;

  gap: 24px;
`;

export const Meal = styled.View`
  width: 100%;
  gap: 8px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Timestamp = styled.View`
  width: 100%;
  gap: 8px;
`;

export const Title = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Info = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Tag = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ theme, type }) => type === 'IN' && css`
    background-color: ${theme.COLORS.GREEN_700};
  `}

  ${({ theme, type }) => type === 'OUT' && css`
    background-color: ${theme.COLORS.RED_700};
  `}
`;

export const TagTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 140px;
  padding: 0px 24px;
  gap: 8px;
`;