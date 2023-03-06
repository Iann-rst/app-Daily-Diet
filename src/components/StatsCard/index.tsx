import { Container, SubTitle, Title } from "./styles";

interface Stats {
  title: string;
  subTitle: string;
}

export function StatsCard({ title, subTitle }: Stats) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}