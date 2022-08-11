import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Particle from "../../components/particle/Particle";
import { LoginBox } from "./Login.style";
import Input from "../../components/input/Input";

function Login() {
  return (
    <Box h="100%" backgroundColor="#fff">
      {/*<Particle />*/}
      {/*<LoginBox>*/}
      {/*  Sign in*/}
      {/*  <Input label="账号" maxLength="15" />*/}
      {/*  <Box h="24px" />*/}
      {/*  <Input label="密码" maxLength="15" />*/}
      {/*</LoginBox>*/}

      <div style={{ fontFamily: "Lora" }}>Create your account 创建你的账号</div>
      <div>Create your account 创建你的账号</div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div>label name</div>
            <div>
              <input />
            </div>
          </div>
          <div>icon</div>
        </div>
      </div>
    </Box>
  );
}

export default Login;
