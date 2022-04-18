import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { LoginForm } from "@components/LoginScreen/LoginForm";

const OuterContainer = styled.View`
  flex: 1;
  background-color: #22223b;
`;

const InnerContainer = styled.View`
  flex: 1;
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

const Greeting = styled.Text`
  /* position: absolute; */
  padding: 9% 0 0 7%;
  font-size: 46px;
  color: #9a8c98;
`;

const CreateAccountContainer = styled.View`
  /* position: absolute; */
  align-items: center;
  width: 100%;
  bottom: 5%;
`;

interface Props {
  greeting: string;
}

const LoginScreen = ({ greeting = "Hello" }: Props): JSX.Element => {
  return (
    <OuterContainer>
      <InnerContainer>
        <CircleBackground></CircleBackground>
        <Greeting>{greeting}</Greeting>
        <LoginForm />
        <CreateAccountContainer>
          <Text>Not having account yet? Create one here</Text>
        </CreateAccountContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export { LoginScreen };
