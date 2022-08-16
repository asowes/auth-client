import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const PointerBox = styled(Box)`
  color: #9ca5b3;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #ffffff;
    font-weight: bold;
  }
`;
