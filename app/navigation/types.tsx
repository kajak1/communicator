import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "./createStack";

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

declare global {
  // eslint-disable-next-line
  namespace ReactNavigation {
    //eslint-disable-next-line
    interface RootParamList extends RootStackParamList {}
  }
}
