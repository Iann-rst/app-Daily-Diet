import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {
  diet: 'YES' | 'NO'
}

type ContainerProps = {
  isActive: boolean;
  diet: 'YES' | 'NO'
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  width: 50%;

  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px; 

  border-radius: 6px;

  ${({ isActive }) => isActive === false && css`
    border: none;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  `}
 

  ${({ isActive, diet }) => isActive && diet === 'YES' && css`
    border: 1px solid ${({ theme }) => theme.COLORS.GREEN_700};
    background-color: ${({ theme }) => theme.COLORS.GREEN_100};
  `}

  ${({ isActive, diet }) => isActive && diet === 'NO' && css`
    border: 1px solid ${({ theme }) => theme.COLORS.RED_700};
    background-color: ${({ theme }) => theme.COLORS.RED_100};
  `}

`;

export const Indication = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;

  ${({ diet }) => diet === 'YES' && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  `}


${({ diet }) => diet === 'NO' && css`
    background-color: ${({ theme }) => theme.COLORS.RED_700};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
