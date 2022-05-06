import { ThemeObject } from "../themes";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeObject {}
}
