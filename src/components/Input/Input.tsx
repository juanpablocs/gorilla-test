import { InputControlStyled, TextInputStyled } from "./styled";
import { MaterialIcon } from ".."

export interface InputProps {
  onChange?: (value) => void;
  iconName?: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ onChange, iconName = null, placeholder }) => {

  return (
    <InputControlStyled>
      <TextInputStyled
        placeholder={placeholder}
        onChangeText={onChange}
        underlineColorAndroid="transparent"
      />
      {iconName && <MaterialIcon size='medium' color="#ccc" name={iconName} />}
    </InputControlStyled>
  )
}