import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { BiIdCard } from "react-icons/bi";
import Input from "@asow/common-client/components/input";
import { IoMail } from "react-icons/io5";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { EMAIL, NICK_NAME, PASSWORD, USER_NAME } from "../../const/UserConst";

function CreateAccountForm() {
  const { register } = useFormContext();

  const [visiblePwd, setVisiblePwd] = useState(false);

  return (
    <>
      <Grid gridColumnGap={10} gridRowGap={5} mt="48px">
        <GridItem>
          <Input
            {...register(USER_NAME)}
            label="User Name"
            suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
          />
        </GridItem>
        <GridItem>
          <Input
            {...register(NICK_NAME)}
            label="Nick Name"
            suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <Input
            {...register(EMAIL)}
            label="Email"
            suffixIcon={<IoMail color="#9ca5b3" fontSize="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, xl: 2 }}>
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
        </GridItem>
      </Grid>
    </>
  );
}

export default CreateAccountForm;
