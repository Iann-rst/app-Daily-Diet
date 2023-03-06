import { View } from "react-native";
import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
  title: string;
  goBack: () => void;
}

export function SecondaryHeader({ title, goBack }: Props) {
  return (
    <Container>
      <BackButton onPress={goBack}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
      <View />
    </Container>
  )

}