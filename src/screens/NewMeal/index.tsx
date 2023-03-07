import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Keyboard } from "react-native";

import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { SecondaryHeader } from "@components/SecondaryHeader";


import { Form, Content, LabelDiet, Container, Groups } from "./styles";

export function NewMeal() {
  const { navigate } = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [diet, setDiet] = useState<boolean | ''>('');

  function handleGoBack() {
    navigate("home")
  }

  function handleCreateNewMeal() {
    if (name.trim().length === 0 || description.trim().length === 0 || date.trim().length === 0 || hour.trim().length === 0 || diet.valueOf().toString().trim().length === 0) {
      return Alert.alert("Nova Refeição", "Preencha todos os campos!");
    }

    console.log("Name =>", name);
    console.log("Description =>", description);
    console.log("Hour =>", hour);
    console.log("Date =>", date);
    console.log("Diet =>", diet);

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

          <Button style={{ marginTop: 172 }} title="Cadastrar refeição" onPress={handleCreateNewMeal} />
        </Form>

      </Content>
    </Container>
  )
}