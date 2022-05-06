import { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";

import { useTheme } from "@hooks/useTheme";

interface Props {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: Props): JSX.Element => {
  const [theme] = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeWrapper };
