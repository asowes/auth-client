import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { BiIdCard } from "react-icons/bi";
import { Input } from "@asow/ui";
import { IoMail } from "react-icons/io5";
import { EMAIL, NICK_NAME, PASSWORD, USER_NAME } from "../../const/UserConst";
import { validateRequire } from "../validate";

function CreateAccountForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const color = (key) => (errors[key]?.message ? "#f56565" : "#9ca5b3");

  return (
    <>
      <Grid gridColumnGap={10} gridRowGap={5} mt="48px">
        <GridItem>
          <Input
            {...register(USER_NAME, {
              validate: (value) => validateRequire(value, "请输入用户名"),
            })}
            label="User Name"
            size={"large"}
            suffixIcon={<BiIdCard color={color(USER_NAME)} fontSize="28px" />}
            hasError={errors[USER_NAME]?.message}
          />
        </GridItem>
        <GridItem>
          <Input
            {...register(NICK_NAME, {
              validate: (value) => validateRequire(value, "请输入昵称"),
            })}
            label="Nick Name"
            size={"large"}
            suffixIcon={<BiIdCard color={color(NICK_NAME)} fontSize="28px" />}
            hasError={errors[NICK_NAME]?.message}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <Input
            {...register(EMAIL)}
            label="Email"
            size={"large"}
            suffixIcon={<IoMail color="#9ca5b3" fontSize="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <Input.Password
            {...register(PASSWORD, {
              validate: (value) => validateRequire(value, "请输入密码"),
            })}
            label="Password"
            size={"large"}
            autoComplete="new-password"
            hasError={errors[PASSWORD]?.message}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default CreateAccountForm;
