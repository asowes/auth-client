import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Particle from "../../components/particle/Particle";
import Button from "@asow/common-client/components/button";
import { http } from "@asow/common-client/helper";
import { FormProvider, useForm } from "react-hook-form";
import { PointerBox } from "./Login.style";
import CreateAccountForm from "../../forms/createAccountForm";

function Login() {
  const method = useForm({ mode: "all" });
  const { handleSubmit, setError, getValues, setValue, setFocus } = method;

  const onFormSubmit = (data) => {
    console.log(123, data);
    http
      .POST("/api/register/user", data)
      .then((res) => {
        if (res.code === "Error") {
          alert("注册失败");
        } else {
          alert("注册成功");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("注册失败");
      });
  };

  const onFormError = (err) => {
    console.log(err);
  };

  return (
    <Box
      flex="auto"
      backgroundColor="#000000"
      p={{ base: "8px", sm: "16px", md: "24px", lg: "36px", xl: "64px" }}
    >
      <Particle />

      <Flex color="#fff" alignItems="baseline" gap="64px">
        <Box color="#ffffff" fontWeight="bold" fontSize="32px">
          Walk On Air
        </Box>
        <PointerBox color="#9ca5b3" fontWeight="bold" fontSize="22px">
          Home
        </PointerBox>
        <PointerBox color="#9ca5b3" fontWeight="bold" fontSize="22px">
          Login
        </PointerBox>
      </Flex>
      <Flex>
        <Box mt="200px">
          <Box>
            <Box color="#9ca5b3" fontWeight="bold" fontSize="18px">
              START FOR FREE
            </Box>
            <Box color="#ffffff" fontWeight="bold" fontSize="48px" mt="16px">
              Create new account<span style={{ color: "#4490ee" }}>.</span>
            </Box>
            <Box color="#9ca5b3" fontSize="18px" mt="24px">
              Already A Member？
              <PointerBox as="span" style={{ color: "#4490ee" }}>
                Log In
              </PointerBox>
            </Box>
            <FormProvider {...method}>
              <CreateAccountForm />
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
              Create account
            </Button>
          </Box>
          <Box />
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
