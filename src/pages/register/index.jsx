import React from "react";
import { Box } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMessage } from "@asow/ui";
import { PointerBox } from "../login/Login.style";
import CreateAccountForm from "../../forms/createAccountForm";
import Button from "@asow/common-client/components/button";
import { AccountOperate } from "../../components/accountHeader";
import AccountWrapper from "../../components/accountWrapper";
import { registerUser } from "../../api/userApi";

function Register() {
  const method = useForm({ mode: "all" });
  const { handleSubmit, setError, getValues, setValue, setFocus } = method;

  const history = useHistory();
  const message = useMessage();

  const onFormSubmit = (data) => {
    registerUser(data)
      .then((res) => {
        if (res.data.code === "Error") {
          message.error("注册失败");
        } else {
          message.success("注册成功");
        }
      })
      .catch((err) => {
        console.error(err);
        message.error("注册失败");
      });
  };

  const onFormError = (err) => {
    console.log(err);
  };

  const gotoLogin = () => {
    history.push(`/sign-in`);
  };

  return (
    <AccountWrapper type={AccountOperate.REGISTER}>
      <Box w={{ base: "100%", lg: "unset", xl: "70%" }}>
        <Box
          color="#9ca5b3"
          fontWeight="bold"
          fontSize="18px"
          display={{ base: "none", lg: "block" }}
        >
          START FOR FREE
        </Box>
        <Box
          color="#ffffff"
          fontWeight="bold"
          fontSize={{ base: "28px", lg: "40px" }}
          fontFamily="Lato"
          mt={{ base: "4px", md: "16px" }}
        >
          Create new account<span style={{ color: "#4490ee" }}>.</span>
        </Box>
        <Box
          color="#9ca5b3"
          fontSize={{ base: "16px", lg: "18px" }}
          mt={{ base: "4px", md: "12px", lg: "24px" }}
        >
          Already A Member？
          <PointerBox
            as="span"
            style={{ color: "#4490ee" }}
            onClick={gotoLogin}
          >
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
    </AccountWrapper>
  );
}
export default Register;
