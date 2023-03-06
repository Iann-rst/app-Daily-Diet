import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { SecondaryHeader } from "@components/SecondaryHeader";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Form, Content } from "./styles";

export function NewMeal() {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("home")
  }

  return (
    <>
      <SecondaryHeader title="Nova refeição" goBack={handleGoBack} />
      <Content>
        <Form>
          <Input label="Nome" />
          <Input label="Descrição" type="PRIMARY" textAlignVertical="top" />
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between'
          }}
          >
            <Input label="Data" type="SECONDARY" />
            <Input label="Hora" type="SECONDARY" />
          </View>
        </Form>
        <Button title="Cadastrar refeição" />
      </Content>
    </>
  )
}