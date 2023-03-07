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
  TitleMeals,
  TitleListMeals
} from "./styles";

import LogoImg from '@assets/logo.png'
import AvatarImg from '@assets/avatar.png';
import { Button } from "@components/Button";
import { useTheme } from "styled-components/native";
import { MealCard } from "@components/MealCard";
import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";


/* Fazer a FlatList para listar os dias e as refeições de cada dia */

export function Home() {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  const meals = [
    {
      title: '12/03/2023',
      data: [
        {
          id: '1',
          hour: '20:00',
          name: 'Sanduíche',
          description: 'Sanduíche de pão integral com salada de alface e tomate',
          isDiet: true
        },
        {
          id: '2',
          hour: '19:00',
          name: 'X-tudo',
          description: 'Sanduíche de pão integral com salada de alface e tomate',
          isDiet: false
        },
        {
          id: '3',
          hour: '19:00',
          name: 'Shake de Banana',
          description: 'Vitamina concentrada de banana',
          isDiet: true
        }
      ]
    },
    {
      title: '14/03/2023',
      data: [
        {
          id: '1',
          hour: '16:00',
          name: 'X-tudo',
          description: 'X-tudo de frango',
          isDiet: false
        }
      ]
    }
  ]

  const onTheDiet = true;

  function handleShowStatistic() {
    navigate("statistic");
  }

  function handleCreateNewMeal() {
    navigate("newMeal")
  }

  function handleShowDetailsMeals(id: string) {
    navigate("detailsMeal", { id })
  }

  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
        <Avatar source={AvatarImg} />
      </Header>

      <StatCard type={onTheDiet}>
        <StatCardButton onPress={handleShowStatistic}>
          <StatCardButtonIcon color={onTheDiet ? COLORS.GREEN_700 : COLORS.RED_700} />
        </StatCardButton>
        <StatCardTitle>90,86%</StatCardTitle>
        <StatCardSubTitle>das refeições dentro da dieta</StatCardSubTitle>
      </StatCard>

      <TitleMeals>Refeições</TitleMeals>
      <Button onPress={handleCreateNewMeal} style={{ marginBottom: 32 }} title="Nova refeição" icon="plus" />

      <SectionList
        sections={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item: meal }) => (
          <MealCard
            title={meal.name}
            hour={meal.hour}
            type={meal.isDiet === true ? 'PRIMARY' : 'SECONDARY'}
            onPress={() => handleShowDetailsMeals(meal.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TitleListMeals>{title}</TitleListMeals>
        )}
        showsVerticalScrollIndicator={false}
      />


    </Container>
  )
} 