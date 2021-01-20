import styled from "styled-components";
import { Link } from "react-router-dom";

export const ExitContainer = styled(Link)`
  width: 100%;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #ffdb0e, #fb7b00);
  background-size: 400% 400%;
  text-decoration: none;

  -webkit-animation: closeContainer 18s ease infinite;
  -moz-animation: closeContainer 18s ease infinite;
  animation: closeContainer 18s ease infinite;

  @-webkit-keyframes closeContainer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes closeContainer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes closeContainer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: #ffdb0e;
  }

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 3vw;
  }
`;

export const ExitH3 = styled.h3`
  color: black;
  width: 100%;
  text-align: center;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 2vw;
  line-height: 2.5vw;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 2vw;
  }
`;
