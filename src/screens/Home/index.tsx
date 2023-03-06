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
import { FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


/* Fazer a FlatList para listar os dias e as refeições de cada dia */

export function Home() {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();


  const meals = [
    {
      date: '12/03/2023',
      meal: [
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
        }
      ]
    },
    {
      date: '13/03/2023',
      meal: [
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
      <Button style={{ marginBottom: 32 }} title="Nova refeição" icon="plus" />

      <FlatList
        data={meals}
        keyExtractor={item => item.date}
        renderItem={({ item }) => (
          <>
            <TitleListMeals>{item.date.replaceAll('/', '.')}</TitleListMeals>
            <FlatList
              data={item.meal}
              keyExtractor={meal => meal.id}
              renderItem={({ item }) => (
                <MealCard hour={item.hour} title={item.name} type={item.isDiet === true ? 'PRIMARY' : 'SECONDARY'} />
              )}
            />
          </>
        )}
      />

    </Container>
  )
} 