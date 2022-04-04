import { AppRegistry } from "react-native";
import { App } from "./app";
import { name as appName } from "./app-info.json";

AppRegistry.registerComponent(appName, () => App);
