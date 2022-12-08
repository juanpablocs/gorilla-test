import { css } from 'styled-components';
import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex:1;
    background-color: white;
    font-family: 'Montserrat-Medium';
    padding: 16px;
`;

export const TextStyled = Styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  backgroundColor: white;
  ${props => props.heading && css`
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
    color: black;
  `}
`;

export const FormStyled = Styled.View`
  flex: 1;
`;

export const NotFoundStyled = Styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;