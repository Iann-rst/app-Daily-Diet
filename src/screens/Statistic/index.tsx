import { Header } from "@components/Header";
import { StatsCard } from "@components/StatsCard";
import { useNavigation } from "@react-navigation/native";
import { getAllMealStats } from "@utils/getAllMealStats";
import { useEffect, useState } from "react";

import {
  Container,
  Content,
  InfoMeals,
  InfoMealsSubTitle,
  InfoMealsTitle,
  InfoView,
  Title
} from "./styles";

type Props = {
  totalMeals: number;
  numberOfMealsInDiet: number;
  numberOfOffDietMeals: number;
  isOnDiet: boolean
  bestDietSequence: number;
  percentageDietMeal: string;
}


export function Statistic() {

  const { navigate } = useNavigation();
  const [statistic, setStatistic] = useState<Props>({} as Props);

  function handleGoBack() {
    navigate("home");
  }

  async function handleGetStatistic() {
    const status = await getAllMealStats();
    setStatistic(status);
  }

  useEffect(() => {
    handleGetStatistic();
  }, [])

  return (
    <Container>
      <Header goBack={handleGoBack} isDiet={statistic.isOnDiet} percentageDietMeal={statistic.percentageDietMeal} />
      <Content style={{ marginTop: -32 }}>
        <Title>Estatística gerais</Title>
        <StatsCard title={String(statistic.bestDietSequence)} subTitle="melhor sequência de pratos dentro da dieta" />
        <StatsCard title={String(statistic.totalMeals)} subTitle="refeições registradas" />
        <InfoView>
          <InfoMeals style={{ marginRight: 8 }} type="PRIMARY">
            <InfoMealsTitle>{statistic.numberOfMealsInDiet}</InfoMealsTitle>
            <InfoMealsSubTitle>refeições dentro da dieta</InfoMealsSubTitle>
          </InfoMeals>

          <InfoMeals type="SECONDARY">
            <InfoMealsTitle>{statistic.numberOfOffDietMeals}</InfoMealsTitle>
            <InfoMealsSubTitle>refeições fora da dieta</InfoMealsSubTitle>
          </InfoMeals>
        </InfoView>
      </Content>
    </Container>
  )
}