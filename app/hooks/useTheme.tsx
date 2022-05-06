import { useState } from "react";

import { darkTheme, lightTheme, ThemeObject } from "../themes";

interface Props {}

const useTheme = (): [ThemeObject, () => void] => {
  const [theme, setTheme] = useState<ThemeObject>(darkTheme);

  // TODO add more functionality

  const toggleTheme = () => {
    theme.mode === "dark" ? setTheme(lightTheme) : setTheme(darkTheme);
  };

  return [theme, toggleTheme];
};

export { useTheme };
