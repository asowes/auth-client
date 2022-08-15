import React from "react";
import { Box } from "@chakra-ui/react";
import Particle from "../../components/particle/Particle";

const Register = () => {
  return (
    <>
      <Box
        flex="auto"
        backgroundColor="#000000"
        p={{ base: "8px", sm: "16px", md: "24px", lg: "36px", xl: "64px" }}
      >
        <Particle />
        <Box>123</Box>
      </Box>
    </>
  );
};
export default Register;
