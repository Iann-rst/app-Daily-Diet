import { Container, FeedbackView, Title, SubTitle, Strong, Image } from "./styles";

import feedbackSuccess from "@assets/diet_success.png";
import feedbackFail from "@assets/diet_fail.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";


type RouteParams = {
  type: boolean;
}

export function Feedback() {

  const { navigate } = useNavigation();
  const route = useRoute();
  const { type } = route.params as RouteParams;

  return (
    <Container>
      <FeedbackView>
        <Title type={type ? 'SUCCESS' : 'FAIL'}>
          {type ? 'Continue assim!' : 'Que pena!'}
        </Title>

        {type && (
          <SubTitle>
            Você continua <Strong>dentro da dieta.</Strong> Muito bem!
          </SubTitle>
        )}

        {!type && (
          <SubTitle>
            Você <Strong>saiu da dieta </Strong>
            dessa vez, mas continue {'\n'}se esforçando e não desista!
          </SubTitle>
        )}

      </FeedbackView>
      <Image source={type ? feedbackSuccess : feedbackFail} />

      <Button
        style={{ width: '65%', marginTop: 32 }}
        title="Ir para a página inicial"
        onPress={() => navigate("home")}
      />
    </Container>
  )
}