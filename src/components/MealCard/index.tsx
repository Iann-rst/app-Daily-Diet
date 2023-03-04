import { TouchableOpacityProps } from "react-native";

import { Container, MealTitle, MealTypeStyleProps, Status, TextLeftMeal } from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  title: string;
  type?: MealTypeStyleProps
}

export function MealCard({ hour, title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest}>
      <TextLeftMeal>{hour}</TextLeftMeal>
      <MealTitle numberOfLines={1}>{title}</MealTitle>
      <Status type={type} />
    </Container>
  )
}