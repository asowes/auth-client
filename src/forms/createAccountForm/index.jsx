import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { BiIdCard } from "react-icons/bi";
import { Input } from "@asow/ui";
import { IoMail } from "react-icons/io5";
import { EMAIL, NICK_NAME, PASSWORD, USER_NAME } from "../../const/UserConst";

function CreateAccountForm() {
  const { register } = useFormContext();

  return (
    <>
      <Grid gridColumnGap={10} gridRowGap={5} mt="48px">
        <GridItem>
          <Input
            {...register(USER_NAME)}
            label="User Name"
            size={"large"}
            suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
          />
        </GridItem>
        <GridItem>
          <Input
            {...register(NICK_NAME)}
            label="Nick Name"
            size={"large"}
            suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
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
            {...register(PASSWORD)}
            label="Password"
            size={"large"}
            autoComplete="new-password"
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default CreateAccountForm;
