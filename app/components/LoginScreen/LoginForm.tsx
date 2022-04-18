import React from "react";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

const OuterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  background-color: #726d81;
`;

// interface Props {}

const LoginForm = (): JSX.Element => {
  const navigator = useNavigation();

  const handleNavigation = () => {
    // navigator.navigate("CreateAccount");
  };

  return (
    <OuterContainer>
      <StyledForm>
        <StyledInput label="username" />
        <StyledInput label="password" />
        <StyledButton title="log in" />
      </StyledForm>
    </OuterContainer>
  );
};

export { LoginForm };
