import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { FlexContainer } from "./styled";

const StyledInput = styled.TextInput`
  width: 100%;
  height: 75px;
  background-color: #4a4e69;
  border-radius: 12px;
`;

const StyledView = styled(FlexContainer)`
  /* border: 1px solid blue; */
`;

const InputContainer = styled(FlexContainer)`
  width: 90%;
`;

const LabelContainer = styled(FlexContainer)`
  position: absolute;
  top: -25%;
  left: 2%;
  transform: translateY(16px);
`;

interface Props {
  labelText: string;
}

const Input = ({ labelText }: Props): JSX.Element => {
  return (
    <StyledView flex={1} justifyContent="center" alignItems="center">
      <InputContainer alignItems="center">
        <StyledInput />
        <LabelContainer>
          <Text>{labelText}</Text>
        </LabelContainer>
      </InputContainer>
    </StyledView>
  );
};

export { Input };
