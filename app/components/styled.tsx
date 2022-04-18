import styled from "styled-components/native";
import { ViewStyle } from "react-native";

export const FlexContainer = styled.View<ViewStyle>`
  ${({ flex }) => flex && `flex: ${flex}`}
  ${({ justifyContent }) =>
    justifyContent && `justifyContent: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `alignItems: ${alignItems}`}
  ${({ flexWrap }) => flexWrap && `flexWrap: ${flexWrap}`}
  ${({ alignContent }) => alignContent && `alignContent: ${alignContent}`}
`;
