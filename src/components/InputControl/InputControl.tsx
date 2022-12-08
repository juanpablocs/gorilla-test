import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { InputControlStyled, Label } from "./styled";
import { Input } from "../../components";
import { InputProps } from './../Input/Input';
import { MaterialIcon } from "..";

interface InputControlProps extends InputProps {
  label: string;
  type?: 'text' | 'select';
  selectOptions?: { label: string; value: string }[]
}

export const InputControl: React.FC<InputControlProps> = ({ label, iconName, type = 'text', placeholder, selectOptions = [], onChange = ()=>{} }) => {

  return (
    <InputControlStyled>
      <Label>{label}</Label>
      {type === 'text' ?
        <Input onChange={onChange} iconName={iconName} placeholder={placeholder} placeholderTextColor="#9EA0A4"  />
        :
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={onChange as any}
          placeholder={{ label: placeholder, value: null, color: '#9EA0A4' }}
          useNativeAndroidPickerStyle={false}
          items={selectOptions}
          /*@ts-ignore */
          Icon={() => <MaterialIcon size="large" color="#ccc" name='chevron-down' />}
        />
      }
    </InputControlStyled>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 7,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    paddingRight: 50, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 7,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    paddingRight: 50, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 16,
    right: 10,
  },
});