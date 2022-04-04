import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { FlexContainer } from "@components/styled";
import { Input } from "@components/Input";

const Outer = styled(FlexContainer)`
  /* border: 1px solid red; */
`;

const StyledForm = styled(FlexContainer)`
  height: 30%;
  width: 100%;
  /* border: 1px solid red; */
`;

// interface Props {}

const LoginForm = (): JSX.Element => {
  return (
    <Outer flex={1} justifyContent="center" alignItems="center">
      <StyledForm justifyContent="center">
        <Input labelText="username" />
        <Input labelText="password" />
        <Button title="log in"></Button>
      </StyledForm>
    </Outer>
  );
};

export { LoginForm };
