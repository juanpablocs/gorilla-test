import React from "react"
import { TouchableHighlight } from "react-native"
import { TextStyled } from "../styled"
import { ItemListStyled } from "./styled"

export const ItemList = ({ title }) => {

  return (
    <TouchableHighlight>
      <ItemListStyled>
        <TextStyled>{title}</TextStyled>
      </ItemListStyled>
    </TouchableHighlight>
  )
}