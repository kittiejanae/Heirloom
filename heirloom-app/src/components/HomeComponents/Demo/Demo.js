import React from "react";
import {
  DemoContainer,
  DemoTitle,
  DemoH2,
  DemoContentWrapper,
  DemoContent1,
  DemoImage,
  MobileDemoBtn,
  DesktopDemoBtn,
  DemoButtons,
  DemoContent2,
  DemoImage2,
} from "./DemoElements";
import demo from "../../../images/demo.svg";
import mockup from "../../../images/mockup.png";

const DemoElements = () => {
  return (
    <>
      <DemoContainer className="demo">
        <DemoTitle>
          <DemoH2>Demo</DemoH2>
        </DemoTitle>
        <DemoContentWrapper>
          <DemoContent1>
            <DemoImage src={demo} type="image/svg" />
            <DemoButtons>
              <DesktopDemoBtn to="/AppDemo">App Demo</DesktopDemoBtn>
              {/* eslint-disable-next-line */}
              <a
                target="_blank"
                href="https://www.figma.com/proto/ldzBsH2AG1BDiSTRbnMAiD/Heirloom?node-id=5%3A157&scaling=scale-down"
              >
                <MobileDemoBtn>Mobile Prototype</MobileDemoBtn>
              </a>
            </DemoButtons>
          </DemoContent1>
          <DemoContent2>
            <DemoImage2 src={mockup} type="image/png" />
          </DemoContent2>
        </DemoContentWrapper>
      </DemoContainer>
    </>
  );
};

export default DemoElements;
