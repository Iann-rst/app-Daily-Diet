import { TouchableOpacityProps } from "react-native";
import { Container, Indication, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
  diet?: 'YES' | 'NO';
}

export function Filter({
  title,
  isActive = false,
  diet = 'YES',
  ...rest
}: Props) {
  return (
    <Container diet={diet} isActive={isActive} {...rest}>
      <Indication diet={diet} />
      <Title>{title}</Title>
    </Container>
  )
}