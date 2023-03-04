import { TouchableOpacityProps } from "react-native";
import { ButtonText, ButtonTypeStyleProps, Container, PlusIcon, PencilIcon, TrashIcon } from "./styles";
import { useTheme } from "styled-components/native";



type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  title: string;
  icon?: 'plus' | 'trash' | 'pencil'
}

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container type={type} {...rest}>
      {icon === 'plus' && <PlusIcon color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_600} />}
      {icon === 'trash' && <TrashIcon color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_600} />}
      {icon === 'pencil' && <PencilIcon color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_600} />}
      <ButtonText style={{ marginLeft: 12 }} type={type}>{title}</ButtonText>
    </Container>
  )
}