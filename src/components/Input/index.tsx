import { TextInputProps } from "react-native";
import { Container, InputStyleProps, InputText, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  type?: InputStyleProps;
}

export function Input({ label, type = "DEFAULT", ...rest }: Props) {
  return (
    <Container type={type}>
      <Label>{label}</Label>
      <InputText type={type} {...rest} />
    </Container>
  )
}