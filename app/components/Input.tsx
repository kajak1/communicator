import React from "react";
import { Text, TextInput, TextInputProps } from "react-native";
import { DefaultTheme, StyledComponent } from "styled-components";
import styled from "styled-components/native";

import { useToggle } from "@hooks/useToggle";

const InnerContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex: 1;
`;

// styled-components/native types for TextInput are out of date, so I created a new one based on today's TextInput
type DesiredType = StyledComponent<
  typeof TextInput,
  DefaultTheme,
  Record<string, unknown>,
  never
>;

const StyledInput = styled.TextInput`
  flex: 1;
  background-color: #363852;
  padding-left: 8%;
` as DesiredType;

const LabelContainer = styled.View<{ isFocused: boolean }>`
  position: absolute;
  left: 8%;
  ${({ isFocused }) => (isFocused ? `top: 0%` : `top: 50%`)};
  transform: translateY(-9px);
  align-self: center;
`;

interface Props extends TextInputProps {
  label: string;
}

const Input = ({ label, style, ...rest }: Props): JSX.Element => {
  const [isFocused, toggleFocused] = useToggle(false);

  return (
    <InnerContainer style={style}>
      <InputContainer>
        <StyledInput onFocus={toggleFocused} onBlur={toggleFocused} {...rest} />
        <LabelContainer isFocused={isFocused}>
          <Text>{label}</Text>
        </LabelContainer>
      </InputContainer>
    </InnerContainer>
  );
};

export { Input };
