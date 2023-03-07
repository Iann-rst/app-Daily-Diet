import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { SecondaryHeader } from "@components/SecondaryHeader";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Keyboard, View } from "react-native";

import { Form, Content, LabelDiet, Container, Groups } from "./styles";

export function NewMeal() {
  const { navigate } = useNavigation();

  const [diet, setDiet] = useState<boolean | ''>('');

  function handleGoBack() {
    navigate("home")
  }

  return (
    <Container>
      <SecondaryHeader title="Nova refeição" goBack={handleGoBack} />
      <Content onPress={Keyboard.dismiss}>
        <Form>
          <Input label="Nome" />
          <Input label="Descrição" type="PRIMARY" textAlignVertical="top" />

          <Groups style={{ gap: 20 }}>
            <Input label="Data" type="SECONDARY" />
            <Input label="Hora" type="SECONDARY" />
          </Groups>

          <LabelDiet>Está dentro da dieta?</LabelDiet>

          <Groups style={{ gap: 8 }}>
            <Filter
              title="Sim"
              isActive={diet === true}
              onPress={() => setDiet(true)}
            />

            <Filter
              title="Não"
              diet="NO"
              isActive={diet === false}
              onPress={() => setDiet(false)}
            />
          </Groups>

          <Button style={{ marginTop: 172 }} title="Cadastrar refeição" />
        </Form>

      </Content>
    </Container>
  )
}