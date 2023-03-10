import { Button } from "@components/Button";
import { SecondaryHeader } from "@components/SecondaryHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMealDetails } from "@storage/meals/getMealDetails";
import { removeSpecificMeal } from "@storage/meals/removeSpecificMeal";
import { Meal as MealProps, Meals } from "@storage/storageConfig";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Container, Content, Description, Footer, Info, Meal, Name, Status, Tag, TagTitle, Timestamp, Title } from "./styles";

type RouteParams = {
  id: string;
}

export function DetailsMeal() {

  const [meal, setMeal] = useState<MealProps>();
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const { navigate } = useNavigation();

  function handleBackHome() {
    navigate("home");
  }

  function handleGoEditMeal() {
    navigate("editMeal", { id })
  }
  async function fetchDetailsMeal() {
    // console.log("Pegar os detalhes da refeição: ", id)
    try {
      const response = await getMealDetails(id);
      if (response) {
        setMeal(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function removeMeal() {
    try {
      await removeSpecificMeal(id, meal!.date);
      navigate("home");
    } catch (error) {
      console.log(error)
    }
  }

  async function handleRemoveMeal() {
    Alert.alert(
      'Remover',
      'Deseja realmente excluir o registro da refeição?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim, excluir', onPress: () => removeMeal() }
      ]
    )
  }

  useEffect(() => {
    fetchDetailsMeal();
  }, []);

  return (
    <Container>
      <SecondaryHeader title="Refeição" goBack={handleBackHome} type={meal?.isDiet ? "IN" : "OUT"} />
      <Content>
        <Meal>
          <Name>{meal?.name}</Name>
          <Description>{meal?.description}</Description>
        </Meal>

        <Timestamp>
          <Title>Data e hora</Title>
          <Info>{meal?.date} às {meal?.hour}</Info>
        </Timestamp>

        <Tag>
          <Status type={meal?.isDiet ? "IN" : "OUT"} />
          <TagTitle>{meal?.isDiet ? "dentro da dieta" : "fora da dieta"}</TagTitle>
        </Tag>
      </Content>
      <Footer>
        <Button icon="pencil" title="Editar refeição" onPress={handleGoEditMeal} />
        <Button icon="trash" type="SECONDARY" title="Excluir refeição" onPress={handleRemoveMeal} />
      </Footer>
    </Container>
  )
}