import React from "react";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import { ScrollViewWrapper } from "@components";
import { Stack } from "@navigation/createStack";

import { CreateAccountScreen, LoginScreen } from "@screens";

const OuterContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #22223b;
`;

const App = (): JSX.Element => (
  <OuterContainer>
    <ScrollViewWrapper>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollViewWrapper>
  </OuterContainer>
);

export { App };
