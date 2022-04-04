import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { FlexContainer } from "@components/styled";
import { LoginForm } from "./components/LoginForm";

const OuterContainer = styled(FlexContainer)`
  /* border: 1px solid green; */
`;

const CreateAccountContainer = styled(FlexContainer)`
  /* position: absolute; */
  align-items: center;
  width: 100%;
  bottom: 5%;
`;

const Greeting = styled.Text`
  /* position: absolute; */
  padding: 9% 0 0 7%;
  font-size: 46px;
  color: #9a8c98;
`;

const CircleBackground = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 999px;
  background-color: #4a4e69;
  position: absolute;
  top: -100px;
  left: -50px;
`;

interface Props {
  greeting: string;
}

const StyledFlexCotainer = styled(FlexContainer)`
  background-color: #22223b;
`;

const LoginScreen = ({ greeting = "Hello" }: Props): JSX.Element => {
  return (
    <StyledFlexCotainer flex={1}>
      <OuterContainer flex={1}>
        <CircleBackground></CircleBackground>
        <Greeting>{greeting}</Greeting>
        <LoginForm />
        <CreateAccountContainer>
          <Text>Not having account yet? Create one here</Text>
        </CreateAccountContainer>
      </OuterContainer>
    </StyledFlexCotainer>
  );
};

export { LoginScreen };
