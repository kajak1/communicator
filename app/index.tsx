import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import { ScrollViewWrapper } from "@components/ScrollViewWrapper";
import { FlexContainer } from "@components/styled";

import { CreateAccountScreen } from "@screens/CreateAccountScreen";
import { LoginScreen } from "@screens/LoginScreen";

import { Stack } from "@utils/createStack";

const StyledFlexCotainer = styled(FlexContainer)`
  background-color: #22223b;
`;

const App = (): JSX.Element => {
  return (
    <StyledFlexCotainer as={SafeAreaView} flex={1}>
      <ScrollViewWrapper>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccountScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollViewWrapper>
    </StyledFlexCotainer>
  );
};

export { App };
