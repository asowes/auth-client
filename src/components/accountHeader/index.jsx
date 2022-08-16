import React, { useImperativeHandle } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { PointerBox } from "./AccountHeader.styled";

export const AccountOperate = {
  SIGN_IN: "sign in",
  REGISTER: "register",
};

function AccountHeader({ type = AccountOperate.SIGN_IN }) {
  const history = useHistory();

  const jump = () => {
    type === AccountOperate.REGISTER && history.push("/sign-in");
    type === AccountOperate.SIGN_IN && history.push("/register");
  };

  return (
    <>
      <Flex color="#fff" justifyContent="space-between">
        <Flex alignItems="flex-end" gap="64px">
          <Box color="#ffffff" fontWeight="bold" fontSize="28px">
            Walk On Air
          </Box>
          <PointerBox>Home</PointerBox>
          <PointerBox textTransform="capitalize" onClick={jump}>
            {type === AccountOperate.REGISTER && AccountOperate.SIGN_IN}
            {type === AccountOperate.SIGN_IN && AccountOperate.REGISTER}
          </PointerBox>
        </Flex>
        <Flex alignItems="flex-end" gap="64px">
          <PointerBox>Language</PointerBox>
          <PointerBox>Contact US</PointerBox>
        </Flex>
      </Flex>
    </>
  );
}

export default AccountHeader;
