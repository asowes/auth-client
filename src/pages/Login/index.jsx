import React, { useEffect, useRef } from "react";
import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Particle from "../../components/particle/Particle";
import Input from "@asow/common-client/components/input";
import Button from "@asow/common-client/components/button";
import { BiIdCard } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  return (
    <Box
      h="100%"
      backgroundColor="#000"
      p={{ base: "8px", sm: "16px", md: "24px", lg: "36px", xl: "64px" }}
    >
      {/*<Particle />*/}

      <Flex color="#fff" alignItems="center">
        <Box color="#ffffff" fontWeight="bold" fontSize="24px">
          杨杨得仪App.
        </Box>
        <Box color="#9ca5b3" fontWeight="bold" fontSize="22px">
          Home
        </Box>
        <Box color="#9ca5b3" fontWeight="bold" fontSize="22px">
          Login
        </Box>
      </Flex>
      <Flex>
        <Box mt="200px">
          <Box>
            <Box color="#9ca5b3" fontWeight="bold" fontSize="18px">
              START FOR FREE
            </Box>
            <Box color="#ffffff" fontWeight="bold" fontSize="48px" mt="16px">
              Create new account<span style={{ color: "#4490ee" }}>.</span>
            </Box>
            <Box color="#9ca5b3" fontSize="18px" mt="24px">
              Already A Member？<span style={{ color: "#4490ee" }}>Log In</span>
            </Box>
            <Grid gridColumnGap={10} gridRowGap={5} mt="48px">
              <GridItem>
                <Input
                  label="First Name"
                  suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
                />
              </GridItem>
              <GridItem>
                <Input
                  label="Last Name"
                  suffixIcon={<BiIdCard color="#9ca5b3" fontSize="28px" />}
                />
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Input
                  label="Email"
                  suffixIcon={<IoMail color="#9ca5b3" fontSize="24px" />}
                />
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Input
                  label="Password"
                  suffixIcon={<AiFillEye color="#9ca5b3" fontSize="24px" />}
                />
              </GridItem>
            </Grid>
            <Box mt="64px" />
            <Button>Create account</Button>
          </Box>
          <Box />
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
