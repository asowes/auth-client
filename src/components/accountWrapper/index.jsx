import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import AccountHeader, { AccountOperate } from "../accountHeader";
import AccountBody from "../accountBody";
import Particle from "../particle/Particle";

function AccountWrapper({ type, children }) {
  return (
    <>
      <Flex flex="auto" backgroundColor="#000000" flexDirection="column">
        <Particle />

        <AccountHeader type={type} />
        <AccountBody>{children}</AccountBody>
      </Flex>
    </>
  );
}

export default AccountWrapper;
