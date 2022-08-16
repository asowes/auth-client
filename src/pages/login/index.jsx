import React, { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Particle from "../../components/particle/Particle";
import Button from "@asow/common-client/components/button";
import { http } from "@asow/common-client/helper";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PointerBox } from "./Login.style";
import CreateAccountForm from "../../forms/createAccountForm";
import AccountHeader, { AccountOperate } from "../../components/accountHeader";
import SignInForm from "../../forms/signInForm";
import AccountWrapper from "../../components/accountWrapper";

function Login() {
  const method = useForm({ mode: "all" });
  const { handleSubmit, setError, getValues, setValue, setFocus } = method;

  const history = useHistory();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  const onFormError = (err) => {
    console.log(err);
  };

  return (
    <AccountWrapper type={AccountOperate.SIGN_IN}>
      <Box w={{ base: "100%", md: "100%", lg: "80%", xl: "70%" }}>
        <Box color="#ffffff" fontWeight="bold" fontSize="40px" mt="16px">
          Sign In<span style={{ color: "#4490ee" }}>.</span>
        </Box>
        <Box color="#9ca5b3" fontSize="18px" mt="24px">
          Not A Member Yet？
          <PointerBox as="span" style={{ color: "#4490ee" }}>
            Register
          </PointerBox>
        </Box>
        <FormProvider {...method}>
          <SignInForm />
        </FormProvider>
        <Box mt="64px" />
        <Button
          onClick={(e) => {
            handleSubmit(
              (data) => onFormSubmit(data, false),
              (errors) => onFormError(errors, false)
            )(e);
          }}
        >
          Sign in
        </Button>
      </Box>
    </AccountWrapper>
  );
}

export default Login;
