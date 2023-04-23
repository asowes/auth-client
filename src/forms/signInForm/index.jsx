import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Input } from "@asow/ui";
import { PASSWORD, USER_NAME } from "../../const/UserConst";
import { BiIdCard } from "react-icons/bi";
import "../index.css";

function SignInForm() {
  const { register } = useFormContext();

  return (
    <>
      <SimpleGrid
        templateColumns={{ base: "1fr" }}
        gridColumnGap={10}
        gridRowGap={5}
        mt="48px"
      >
        <Input
          {...register(USER_NAME)}
          label="User Name"
          size={"large"}
          suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
        />

        <Input.Password
          {...register(PASSWORD)}
          label="Password"
          size={"large"}
          autoComplete="new-password"
        />
      </SimpleGrid>
    </>
  );
}

export default SignInForm;
