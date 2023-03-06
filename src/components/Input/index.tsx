import { TextInputProps } from "react-native";
import { Container, InputText, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  input_type_2?: boolean;
  textArea?: boolean;
}

export function Input({ label, input_type_2, textArea = false, ...rest }: Props) {
  return (
    <Container style={input_type_2 && { width: '48%' }}>
      <Label>{label}</Label>
      <InputText textArea={textArea} {...rest} />
    </Container>
  )
}