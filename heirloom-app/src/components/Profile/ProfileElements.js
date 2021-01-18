import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesktopProfileContainer = styled(Link)`
  right: 8vw;
  width: 8vw;
  height: 8vw;
  top: 30px;
  z-index: 1;
  position: absolute;
  margin-top: 1.5vw;

  @media screen and (min-width: 768px) {
    right: 3vw;
    top: 7vw;
    width: 6vw;
    height: 6vw;
    z-index: 1;
    position: fixed;
    margin-top: 0;
  }

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const DesktopProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;
