import React from "react";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import { ScrollViewWrapper, ThemeWrapper } from "@components";

import { Stack } from "@navigation/createStack";

import { CreateAccountScreen, LoginScreen } from "@screens";

const OuterContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const App = (): JSX.Element => (
  <ThemeWrapper>
    <OuterContainer>
      <ScrollViewWrapper>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccountScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollViewWrapper>
    </OuterContainer>
  </ThemeWrapper>
);

export { App };
