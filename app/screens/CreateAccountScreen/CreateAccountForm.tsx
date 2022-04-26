import React from "react";
import styled from "styled-components/native";

import { Button, Input } from "@components";

const OuterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const StyledForm = styled.View`
  min-height: 40%;
  width: 90%;
  justify-content: space-between;
  /* border: 1px solid blue; */
`;

const StyledInput = styled(Input)`
  height: 80px;
`;

const StyledButton = styled(Button)`
  height: 60px;
  background-color: #726d81;
`;

// interface Props {}

const CreateAccountForm = (): JSX.Element => {
  return (
    <OuterContainer>
      <StyledForm>
        <StyledInput label="username" />
        <StyledInput label="password" />
        <StyledInput label="email address" />
        <StyledButton title="Create" />
      </StyledForm>
    </OuterContainer>
  );
};

export { CreateAccountForm };
