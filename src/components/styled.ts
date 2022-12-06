import { css } from 'styled-components';
import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex:1;
    background-color: white;
    font-family: 'Montserrat';
    padding: 10px;
`;

export const TextStyled = Styled.Text`
  font-size: 14px;
  font-family: 'Montserrat';
  backgroundColor: white;
  ${props => props.heading && css`
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
  `}
`;