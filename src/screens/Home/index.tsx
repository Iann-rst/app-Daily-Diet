import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

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


import { getAllMeals } from "@storage/meals/getAllMeals";
import { Meals } from "@storage/storageConfig";

/* Fazer a FlatList para listar os dias e as refeições de cada dia */

export function Home() {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<Meals[]>([])

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

  async function fetchMeals() {
    try {
      const response = await getAllMeals();
      setMeals(response);
    } catch (error) {
      console.log(error);
      return Alert.alert("Refeições", "Não foi possível carregas as refeições")
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []))

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