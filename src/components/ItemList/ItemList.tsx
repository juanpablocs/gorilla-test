import React from "react"
import { TouchableHighlight } from "react-native"
import { MaterialIcon } from "../../components"
import { ItemListStyled, TextStyled } from "./styled"

export const ItemList = ({ title, completed = false }) => {

  const iconProps = completed ? { color: 'orange', name: 'checkbox-marked' } : { color: 'orange', name: 'checkbox-blank-outline' };
  return (
    <TouchableHighlight>
      <ItemListStyled>
        <MaterialIcon size="large" {...iconProps} />
        <TextStyled>{title}</TextStyled>
      </ItemListStyled>
    </TouchableHighlight>
  )
}