import { InputControlStyled, TextInputStyled } from "./styled";
import { MaterialIcon } from ".."

export interface InputProps {
  onChange?: (value:string) => void;
  iconName?: string;
  placeholder: string;
  placeholderTextColor?: string;
}

export const Input: React.FC<InputProps> = ({ onChange, iconName = null, placeholder, placeholderTextColor }) => {

  return (
    <InputControlStyled>
      <TextInputStyled
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChange}
        underlineColorAndroid="transparent"
      />
      {iconName && <MaterialIcon size='medium' color="#ccc" name={iconName} />}
    </InputControlStyled>
  )
}