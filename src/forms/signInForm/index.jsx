import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Input from "@asow/common-client/components/input";
import { EMAIL, NICK_NAME, PASSWORD, USER_NAME } from "../../const/UserConst";
import { BiIdCard } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignInForm() {
  const { register } = useFormContext();

  const [visiblePwd, setVisiblePwd] = useState(false);

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
          suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
        />

        <Input
          {...register(PASSWORD)}
          label="Password"
          type={visiblePwd ? "text" : "password"}
          autoComplete="new-password"
          suffixIcon={
            visiblePwd ? (
              <AiFillEye
                color="#9ca5b3"
                fontSize="24px"
                onClick={() => setVisiblePwd(false)}
              />
            ) : (
              <AiFillEyeInvisible
                color="#9ca5b3"
                fontSize="24px"
                onClick={() => setVisiblePwd(true)}
              />
            )
          }
        />
      </SimpleGrid>
    </>
  );
}

export default SignInForm;
