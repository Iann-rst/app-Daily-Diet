import { Header } from "@components/Header";
import { StatsCard } from "@components/StatsCard";
import { useNavigation } from "@react-navigation/native";
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
  isDiet: boolean;
  totalMeals: number;
  totalMealsOnDiet: number;
  totalOffDietMeals: number;
  bestSequenceOfMealsWithinTheDiet: number;
}


export function Statistic() {

  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("home");
  }

  return (
    <Container>
      <Header goBack={handleGoBack} isDiet={true} />
      <Content style={{ marginTop: -32 }}>
        <Title>Estatística gerais</Title>
        <StatsCard title="22" subTitle="melhor sequência de pratos dentro da dieta" />
        <StatsCard title="109" subTitle="refeições registradas" />
        <InfoView>
          <InfoMeals style={{ marginRight: 8 }} type="PRIMARY">
            <InfoMealsTitle>99</InfoMealsTitle>
            <InfoMealsSubTitle>refeições dentro da dieta</InfoMealsSubTitle>
          </InfoMeals>

          <InfoMeals type="SECONDARY">
            <InfoMealsTitle>10</InfoMealsTitle>
            <InfoMealsSubTitle>refeições fora da dieta</InfoMealsSubTitle>
          </InfoMeals>
        </InfoView>
      </Content>
    </Container>
  )
}