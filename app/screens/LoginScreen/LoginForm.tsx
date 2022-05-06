import React, { useState } from "react";
import { Switch } from "react-native";
import styled from "styled-components/native";

import { Button, Input } from "@components";

import { useToggle } from "@hooks/useToggle";

const OuterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

const StyledForm = styled.View`
  height: 37%;
  width: 90%;
  justify-content: space-between;
`;

const StyledInput = styled(Input)`
  height: 80px;
`;

const StyledButton = styled(Button)`
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.button};
`;

const KeepSignedContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const KeepSignedText = styled.Text`
  padding-left: 5px;
`;

const updateHookValueFromInput =
  <T,>(fn: (arg: T) => void) =>
  (value: T) =>
    fn(value);

const LoginForm = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, toggleKeepSigned] = useToggle(false);

  const updateUsername = updateHookValueFromInput(setUsername);

  const updatePassword = updateHookValueFromInput(setPassword);

  return (
    <OuterContainer>
      <StyledForm>
        <StyledInput
          label="username"
          value={username}
          onChangeText={updateUsername}
        />
        <StyledInput
          label="password"
          value={password}
          onChangeText={updatePassword}
        />
        <StyledButton title="log in" />
        <KeepSignedContainer>
          <Switch
            value={keepSignedIn}
            onValueChange={toggleKeepSigned}
            thumbColor="#4a4e69"
          />
          <KeepSignedText>Keep me signed in</KeepSignedText>
        </KeepSignedContainer>
      </StyledForm>
    </OuterContainer>
  );
};

export { LoginForm };
