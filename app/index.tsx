import React from "react";
import {
  useWindowDimensions,
  SafeAreaView,
  ScrollViewProps,
} from "react-native";

import styled from "styled-components/native";

import { FlexContainer } from "@components/styled";

import { LoginScreen } from "@screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StyledFlexCotainer = styled(FlexContainer)`
  background-color: #22223b;
`;

const StyledScrollView = styled.ScrollView<ScrollViewProps>`
  ${({ contentContainerStyle }) =>
    contentContainerStyle && `contentContainerStyle: ${contentContainerStyle}`}
`;

const App = (): JSX.Element => {
  const { height } = useWindowDimensions();

  return (
    <StyledFlexCotainer as={SafeAreaView} flex={1}>
      <StyledScrollView contentContainerStyle={{ height }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StyledScrollView>
    </StyledFlexCotainer>
  );
};

export { App };
