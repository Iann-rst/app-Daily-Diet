import { View } from "react-native";
import { BackButton, BackIcon, Container, DietStyleProps, Title } from "./styles";

type Props = {
  title: string;
  goBack: () => void;
  type?: DietStyleProps;
}

export function SecondaryHeader({ title, goBack, type = "DEFAULT" }: Props) {
  return (
    <Container type={type}>
      <BackButton onPress={goBack}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
      <View />
    </Container>
  )

}