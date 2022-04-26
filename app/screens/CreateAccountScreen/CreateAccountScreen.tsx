import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";

import { RootStackScreenProps } from "@navigation/types";

import { CreateAccountForm } from "./CreateAccountForm";

const OuterContainer = styled.View`
  flex: 1;
  background-color: #22223b;
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

const LoginContainer = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  width: 100%;
  bottom: 5%;
`;

const CreateAccountScreen = (): JSX.Element => {
  const navigation = useNavigation<RootStackScreenProps<"CreateAccount">>();

  const handleNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <OuterContainer>
      <CircleBackground />
      <Greeting>Hi! Create your account below</Greeting>
      <CreateAccountForm />
      <LoginContainer
        onPress={handleNavigation}
        hitSlop={{ top: 75, bottom: 75 }}>
        <Text>Already have an account? Login here</Text>
      </LoginContainer>
    </OuterContainer>
  );
};

export { CreateAccountScreen };
