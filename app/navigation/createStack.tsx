import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
}; // TODO

export const Stack = createStackNavigator<RootStackParamList>();
