import {
  Avatar,
  Container,
  Header,
  Logo,
  StatCardButton,
  StatCardButtonIcon,
  StatCard,
  StatCardSubTitle,
  StatCardTitle,
  TitleMeals
} from "./styles";

import LogoImg from '@assets/logo.png'
import AvatarImg from '@assets/avatar.png';
import { Button } from "@components/Button";
import { useTheme } from "styled-components/native";
import { MealCard } from "@components/MealCard";


/* Fazer a FlatList para listar os dias e as refeições de cada dia */

export function Home() {
  const { COLORS } = useTheme();

  const onTheDiet = true;

  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
        <Avatar source={AvatarImg} />
      </Header>

      <StatCard type={onTheDiet}>
        <StatCardButton onPress={() => console.log("Cliquei")}>
          <StatCardButtonIcon color={onTheDiet ? COLORS.GREEN_700 : COLORS.RED_700} />
        </StatCardButton>
        <StatCardTitle>90,86%</StatCardTitle>
        <StatCardSubTitle>das refeições dentro da dieta</StatCardSubTitle>
      </StatCard>

      <TitleMeals>Refeições</TitleMeals>
      <Button title="Nova refeição" icon="plus" />

      <MealCard type="SECONDARY" hour="20:00" title="X-tudo" />
      <MealCard type="SECONDARY" hour="20:00" title="Lasanha de frango com queijo" />
      <MealCard hour="16:00" title="Whey protein com leite" />
      <MealCard hour="12:30" title="Salada cesar com frango grelhado" />
      <MealCard hour="12:30" title="Vitamina de banana com abacate" />

    </Container>
  )
} 