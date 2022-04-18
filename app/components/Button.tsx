import React from "react";
import { Pressable, PressableProps } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  text-align: center;
`;

interface Props extends PressableProps {
  title: string;
}

const Button = ({ title, ...rest }: Props): JSX.Element => (
  <Pressable {...rest}>
    {({ pressed }) => (
      <Container>
        <StyledText>{pressed ? "pressed" : title}</StyledText>
      </Container>
    )}
  </Pressable>
);

export { Button };
