import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";

import { RootStackScreenProps } from "@navigation/types";

import { LoginForm } from "./LoginForm";

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
  position: absolute;
  padding: 9% 0 0 7%;
  font-size: 46px;
  color: #9a8c98;
`;

const CreateAccountContainer = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  width: 100%;
  bottom: 5%;
`;

const LoginScreen = (): JSX.Element => {
  const navigator = useNavigation<RootStackScreenProps<"Login">>();

  const handleNavigation = () => {
    navigator.navigate("CreateAccount");
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <CircleBackground />
        <Greeting>Hello! Login below</Greeting>
        <LoginForm />
        <CreateAccountContainer
          onPress={handleNavigation}
          hitSlop={{ top: 75, bottom: 75 }}>
          <Text>Not having account yet? Click on this text</Text>
        </CreateAccountContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export { LoginScreen };
