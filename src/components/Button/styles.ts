import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

import { Trash, PencilSimpleLine, Plus } from 'phosphor-react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled(Text) <Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600}
`;

export const PlusIcon = styled(Plus).attrs<Props>(() => ({
  size: 18
}))``

export const TrashIcon = styled(Trash).attrs<Props>(() => ({
  size: 18
}))``

export const PencilIcon = styled(PencilSimpleLine).attrs<Props>(() => ({
  size: 18,
}))``