import React from "react";
import { ExitContainer, ExitH3 } from "./CloseDemoElements";

const CloseDemo = () => {
  return (
    <>
      <ExitContainer to="/">
        <ExitH3>Click Here to Exit Demo</ExitH3>
      </ExitContainer>
    </>
  );
};

export default CloseDemo;
