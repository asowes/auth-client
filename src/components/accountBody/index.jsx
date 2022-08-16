import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function AccountBody({ children }) {
  return (
    <>
      <Flex
        flex="1"
        justifyContent={{ base: "flex-start", md: "flex-end" }}
        alignItems="center"
        gap={{ base: "0", md: "48px" }}
        // h="100%"
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        px={{ base: "12px" }}
      >
        <Box w={{ base: "100%", sm: "100%", xl: "36%" }}>
          <img
            // src="https://w.wallhaven.cc/full/j3/wallhaven-j3dg1m.jpg"
            src="https://w.wallhaven.cc/full/dp/wallhaven-dpl3x3.jpg"
            alt=""
          />
        </Box>
        <Flex
          w={{ base: "100%", sm: "100%", xl: "64%" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
}

export default AccountBody;
