import { ButtonStyled, Text } from "./styled";

export const Button = ({ children, onPress }) => {

  return (
    <ButtonStyled onPress={onPress}>
      <Text>{children}</Text>
    </ButtonStyled>
  )
}