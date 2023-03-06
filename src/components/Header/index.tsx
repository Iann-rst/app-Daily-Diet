import { useTheme } from "styled-components/native";
import { BackButton, BackIcon, Container, SubTitle, Title } from "./styles";

type Props = {
  isDiet: boolean;
  goBack: () => void;
}

export function Header({ isDiet = true, goBack }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container isDiet={isDiet}>
      <BackButton onPress={goBack}>
        <BackIcon color={isDiet ? COLORS.GREEN_700 : COLORS.RED_700} />
      </BackButton>
      <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}