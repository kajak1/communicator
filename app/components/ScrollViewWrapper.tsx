import React from "react";
import { ScrollViewProps, useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const StyledScrollView = styled.ScrollView<ScrollViewProps>`
  ${({ contentContainerStyle }) =>
    contentContainerStyle && `contentContainerStyle: ${contentContainerStyle}`}
`;

interface Props {
  children: React.ReactNode;
}

const ScrollViewWrapper = ({ children }: Props): JSX.Element => {
  const { height } = useWindowDimensions();

  return (
    <StyledScrollView contentContainerStyle={{ height }}>
      {children}
    </StyledScrollView>
  );
};

export { ScrollViewWrapper };
