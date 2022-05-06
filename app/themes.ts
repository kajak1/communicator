export type ThemeObject = Record<
  "mode" | "primary" | "background" | "button" | "input" | "text",
  string
>;

export const darkTheme: ThemeObject = {
  mode: "dark",
  primary: "rgb(255, 45, 85)",
  background: "#22223b",
  button: "#726d81",
  input: "#363852",
  text: "rgb(28, 28, 30)",
};

export const lightTheme: ThemeObject = {
  mode: "light",
  primary: "rgb(255, 45, 85)",
  background: "#27723b",
  button: "#726a81",
  input: "#363852",
  text: "rgb(28, 28, 30)",
};

export type Theme = "dark" | "light";
