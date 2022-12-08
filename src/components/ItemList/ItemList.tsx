import React from "react";
import { useDispatch } from 'react-redux';
import { TouchableHighlight } from "react-native";
import { MaterialIcon } from "../../components";
import { editTask } from "../../store/action";
import { ItemListStyled, TextStyled } from "./styled";

export const ItemList = ({ id, name, completed = false }) => {
  const dispatch = useDispatch();
  const iconProps = completed ? { color: 'orange', name: 'checkbox-marked' } : { color: 'orange', name: 'checkbox-blank-outline' };

  const handlerEditTask = () => {
    dispatch(editTask({ id, completed: !completed }));
  };

  return (
    <TouchableHighlight onPress={handlerEditTask}>
      <ItemListStyled>
        <MaterialIcon size="large" {...iconProps} />
        <TextStyled>{name}</TextStyled>
      </ItemListStyled>
    </TouchableHighlight>
  )
}