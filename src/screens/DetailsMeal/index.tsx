import { Button } from "@components/Button";
import { SecondaryHeader } from "@components/SecondaryHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Container, Content, Description, Footer, Info, Meal, Name, Status, Tag, TagTitle, Timestamp, Title } from "./styles";

type RouteParams = {
  id: string;
}

export function DetailsMeal() {

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const { navigate } = useNavigation();

  function handleBackHome() {
    navigate("home");
  }

  function fetchDetailsMeal() {
    console.log("Pegar os detalhes da refeição: ", id)
  }

  useEffect(() => {
    fetchDetailsMeal();
  }, []);

  return (
    <Container>
      <SecondaryHeader title="Refeição" goBack={handleBackHome} type="IN" />
      <Content>
        <Meal>
          <Name>Sanduíche</Name>
          <Description>Sanduíche de pão integral com atum e salada de alface e tomate</Description>
        </Meal>

        <Timestamp>
          <Title>Data e hora</Title>
          <Info>12/08/2022 às 16:00</Info>
        </Timestamp>

        <Tag>
          <Status type="IN" />
          <TagTitle>dentro da dieta</TagTitle>
        </Tag>
      </Content>
      <Footer>
        <Button icon="pencil" title="Editar refeição" />
        <Button icon="trash" type="SECONDARY" title="Excluir refeição" />
      </Footer>
    </Container>
  )
}