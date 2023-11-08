import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Input } from "@asow/ui";
import { PASSWORD, USER_NAME } from "../../const/UserConst";
import { BiIdCard } from "react-icons/bi";
import "../index.css";
import { validateRequire } from "../validate";

function SignInForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <SimpleGrid
        templateColumns={{ base: "1fr" }}
        gridColumnGap={10}
        gridRowGap={5}
        mt="48px"
      >
        <Input
          {...register(USER_NAME, {
            validate: (value) => validateRequire(value, "请输入用户名"),
          })}
          label="User Name"
          size={"large"}
          suffixIcon={
            <BiIdCard
              color={errors[USER_NAME]?.message ? "#f56565" : "#9ca5b3"}
              fontSize="28px"
            />
          }
          hasError={errors[USER_NAME]?.message}
        />

        <Input.Password
          {...register(PASSWORD, {
            validate: (value) => validateRequire(value, "请输入密码"),
          })}
          label="Password"
          size={"large"}
          autoComplete="new-password"
          hasError={errors[PASSWORD]?.message}
        />
      </SimpleGrid>
    </>
  );
}

export default SignInForm;
