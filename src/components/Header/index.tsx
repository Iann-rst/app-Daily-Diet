import { useTheme } from "styled-components/native";
import { BackButton, BackIcon, Container, SubTitle, Title } from "./styles";

type Props = {
  percentageDietMeal: string;
  isDiet: boolean;
  goBack: () => void;
}

export function Header({ isDiet = true, percentageDietMeal, goBack }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container isDiet={isDiet}>
      <BackButton onPress={goBack}>
        <BackIcon color={isDiet ? COLORS.GREEN_700 : COLORS.RED_700} />
      </BackButton>
      <Title>
        {percentageDietMeal}%
      </Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}