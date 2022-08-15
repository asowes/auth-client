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

      <Flex color="#fff" justifyContent="space-between">
        <Flex alignItems="flex-end" gap="64px">
          <Box color="#ffffff" fontWeight="bold" fontSize="28px">
            Walk On Air
          </Box>
          <PointerBox color="#9ca5b3" fontWeight="bold" fontSize="16px">
            Home
          </PointerBox>
          <PointerBox color="#9ca5b3" fontWeight="bold" fontSize="16px">
            Login
          </PointerBox>
        </Flex>
        <Flex alignItems="flex-end" gap="64px">
          <PointerBox color="#9ca5b3" fontWeight="bold" fontSize="16px">
            Language
          </PointerBox>
          <PointerBox color="#9ca5b3" fontWeight="bold" fontSize="16px">
            Contact US
          </PointerBox>
        </Flex>
      </Flex>

      <Flex mt="150px" justifyContent="flex-end" gap="48px">
        <Box flex="1">
          <img
            // src="https://w.wallhaven.cc/full/j3/wallhaven-j3dg1m.jpg"
            src="https://w.wallhaven.cc/full/dp/wallhaven-dpl3x3.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Box color="#9ca5b3" fontWeight="bold" fontSize="18px">
            START FOR FREE
          </Box>
          <Box color="#ffffff" fontWeight="bold" fontSize="40px" mt="16px">
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
      </Flex>
    </Box>
  );
}

export default Login;
