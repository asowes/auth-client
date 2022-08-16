import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Particle from "../../components/particle/Particle";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { http } from "@asow/common-client/helper";
import { PointerBox } from "../login/Login.style";
import CreateAccountForm from "../../forms/createAccountForm";
import Button from "@asow/common-client/components/button";
import AccountHeader, { AccountOperate } from "../../components/accountHeader";

function Register() {
  const method = useForm({ mode: "all" });
  const { handleSubmit, setError, getValues, setValue, setFocus } = method;

  const history = useHistory();

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

  const gotoLogin = () => {
    history.push("/sign-in");
  };

  return (
    <Box
      flex="auto"
      backgroundColor="#000000"
      p={{ base: "8px", sm: "16px", md: "24px", lg: "36px", xl: "64px" }}
      h="100vh"
    >
      <Particle />

      <AccountHeader type={AccountOperate.REGISTER} />

      <Flex justifyContent="flex-end" alignItems="center" gap="48px" h="100%">
        <Box w="50%">
          <img
            // src="https://w.wallhaven.cc/full/j3/wallhaven-j3dg1m.jpg"
            src="https://w.wallhaven.cc/full/dp/wallhaven-dpl3x3.jpg"
            alt=""
          />
        </Box>
        <Flex
          w="50%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
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
              Create Account
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
export default Register;
