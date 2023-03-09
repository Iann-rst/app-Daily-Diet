import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Keyboard } from "react-native";
import uuid from "react-native-uuid";

import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { SecondaryHeader } from "@components/SecondaryHeader";


import { Form, Content, LabelDiet, Container, Groups } from "./styles";
import { Meal } from "@storage/storageConfig";
import { createNewMeals } from "@storage/meals/createNewMeals";

export function NewMeal() {
  const { navigate } = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isDiet, setIsDiet] = useState<boolean | ''>('');

  function handleGoBack() {
    navigate("home")
  }

  async function handleCreateNewMeal() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      date.trim().length === 0 ||
      hour.trim().length === 0 ||
      isDiet.valueOf().toString().trim().length === 0
    ) {
      return Alert.alert("Nova Refeição", "Preencha todos os campos!");
    }
    const newMeal: Meal = {
      id: String(uuid.v4()),
      date,
      description,
      hour,
      isDiet: isDiet ? true : false,
      name
    }

    try {
      await createNewMeals(newMeal);

      // console.log(newMeal);
      navigate("feedback", {
        type: isDiet ? true : false
      })

    } catch (error) {
      console.log(error);
      Alert.alert("Nova Refeição", "Não foi possível criar adicionar uma nova refeição!");
    }
  }

  return (
    <Container>
      <SecondaryHeader title="Nova refeição" goBack={handleGoBack} />
      <Content onPress={Keyboard.dismiss}>
        <Form>
          <Input label="Nome" onChangeText={setName} />
          <Input label="Descrição" onChangeText={setDescription} type="PRIMARY" textAlignVertical="top" multiline numberOfLines={5} />

          <Groups style={{ gap: 20 }}>
            <Input label="Data" onChangeText={setDate} type="SECONDARY" placeholder="dd/mm/aaaa" />
            <Input label="Hora" onChangeText={setHour} type="SECONDARY" placeholder="hh:mm" />
          </Groups>

          <LabelDiet>Está dentro da dieta?</LabelDiet>

          <Groups style={{ gap: 8 }}>
            <Filter
              title="Sim"
              isActive={isDiet === true}
              onPress={() => setIsDiet(true)}
            />

            <Filter
              title="Não"
              diet="NO"
              isActive={isDiet === false}
              onPress={() => setIsDiet(false)}
            />
          </Groups>

          <Button style={{ marginTop: 172 }} title="Cadastrar refeição" onPress={handleCreateNewMeal} />
        </Form>

      </Content>
    </Container>
  )
}