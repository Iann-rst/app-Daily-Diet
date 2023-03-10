import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Keyboard } from "react-native";

import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { SecondaryHeader } from "@components/SecondaryHeader";

import { Form, Content, LabelDiet, Container, Groups } from "./styles";
import { getMealDetails } from "@storage/meals/getMealDetails";
import { editSpecificMeal } from "@storage/meals/editSpecificMeal";
import { Meal } from "@storage/storageConfig";

type RouteParams = {
  id: string;
}

export function EditMeal() {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParams;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isDiet, setIsDiet] = useState<boolean | ''>('');

  function handleGoBack() {
    navigate("home")
  }

  async function handleEditMeal() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      isDiet.valueOf().toString().trim().length === 0
    ) {
      return Alert.alert("Editar Refeição", "Preencha todos os campos!");
    }

    const updateMeal: Meal = {
      id,
      date,
      hour,
      description,
      isDiet: isDiet ? true : false,
      name
    }

    try {
      await editSpecificMeal(updateMeal)
      navigate("home")
    } catch (error) {
      console.log(error);
      return Alert.alert("Editar Refeição", "Não foi possível realizar as alterações!");
    }
  }

  async function getMeal() {
    const meal = await getMealDetails(id);

    setName(meal!.name);
    setDescription(meal!.description);
    setIsDiet(meal!.isDiet);
    setDate(meal!.date);
    setHour(meal!.hour);
  }

  useEffect(() => {
    getMeal();
  }, [])

  return (
    <Container>
      <SecondaryHeader title="Editar refeição" goBack={handleGoBack} />
      <Content onPress={Keyboard.dismiss}>
        <Form>
          <Input label="Nome" onChangeText={setName} value={name} />
          <Input label="Descrição" onChangeText={setDescription} value={description} type="PRIMARY" textAlignVertical="top" multiline numberOfLines={5} />

          <Groups style={{ gap: 20 }}>
            <Input label="Data" value={date} type="SECONDARY" placeholder="dd/mm/aaaa" editable={false} />
            <Input label="Hora" value={hour} type="SECONDARY" placeholder="hh:mm" editable={false} />
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

          <Button style={{ marginTop: 172 }} title="Salvar alterações" onPress={handleEditMeal} />
        </Form>

      </Content>
    </Container>
  )
}