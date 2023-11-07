import React from "react";
import { Box } from "@chakra-ui/react";
import Button from "@asow/common-client/components/button";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "@asow/core/hooks";
import { PointerBox } from "./Login.style";
import { AccountOperate } from "../../components/accountHeader";
import SignInForm from "../../forms/signInForm";
import AccountWrapper from "../../components/accountWrapper";
import { TOKEN, USER_ID } from "../../const/LocalStorageKeys";
import { login } from "../../api/userApi";
import { useMessage } from "@asow/ui";

function Login() {
  const method = useForm({ mode: "all" });
  const { handleSubmit, setError, getValues, setValue, setFocus } = method;

  const history = useHistory();
  const [_, setToken] = useLocalStorage(TOKEN, "");
  const [__, setUserId] = useLocalStorage(USER_ID, "");

  const message = useMessage();

  const gotoRegister = () => {
    history.push(`/register`);
  };

  const onFormSubmit = (data) => {
    login(data)
      .then((res) => {
        const { data } = res;
        console.log(data);
        setToken(data.token);
        setUserId(data.userId);
        window.location.href = "/chat";
      })
      .catch(() => {
        message.error("登录失败");
      });
  };

  const onFormError = (err) => {
    console.log(err);
  };

  return (
    <AccountWrapper type={AccountOperate.SIGN_IN}>
      <Box w={{ base: "100%", md: "100%", lg: "80%", xl: "70%" }}>
        <Box
          color="#ffffff"
          fontWeight="bold"
          fontSize={{ base: "24px", lg: "40px" }}
          mt={{ base: "4px", md: "16px" }}
        >
          Sign In<span style={{ color: "#4490ee" }}>.</span>
        </Box>
        <Box
          color="#9ca5b3"
          fontSize={{ base: "16px", lg: "18px" }}
          mt={{ base: "4px", md: "12px", lg: "24px" }}
        >
          Not A Member Yet？
          <PointerBox
            as="span"
            style={{ color: "#4490ee" }}
            onClick={gotoRegister}
          >
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
