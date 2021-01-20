import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

  @media screen and (min-width: 768px) {
    width: 72%;
  }
`;
const ModalWrapper = styled.div`
  flex-direction: colunm;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: auto;
  margin-bottom: 4vw;
  -webkit-box-shadow: 2px 5px 13px -5px #ffdb0e;
  box-shadow: 2px 5px 13px -5px black;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border: 2px solid black;
  border-radius: 8px;
  margin-top: 4vw;
  background: linear-gradient(270deg, #ffdb0e, #fb7b00);
  background-size: 400% 400%;

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

    @media screen and (min-width: 768px) {
      width: 30vw;
      height: 10vw;
    }
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: black;
  -o-object-fit: cover;
  object-fit: cover;
`;

const ModalContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  color: black;
  height: 70%;
  width: 80%;
  margin-left: 2vw;
  margin-bottom: 4vw;

  h1 {
    width: 100%;
    text-align: left;
    font-family: Banshee;
    font-style: normal;
    font-weight: normal;
    font-size: 4.5vw;
    line-height: 4.7vw;
    text-align: left;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      font-size: 3.5vw;
      line-height: 3.7vw;
    }
  }

  h2 {
    font-family: BalooTamma2-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5vw;
    line-height: 2.7vw;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      font-size: 1.5vw;
      line-height: 1.7vw;
    }
  }

  p {
    text-align: left;
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 2.2vw;
    line-height: 2.4vw;
    letter-spacing: 0.0075em;

    @media screen and (min-width: 768px) {
      font-size: 1.2vw;
      line-height: 1.4vw;
    }
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: auto;
  padding: 0;
  z-index: 10;

  &:hover {
    transform: scale(1.05);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;
export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (event) => {
      if (event.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImage
                src={require("../images/Hero2.jpg").default}
                alt="Couple Eating"
              />
              <ModalContent>
                <h1>This was just a taste...</h1>
                <h2>But we're flattered that you're enjoying this demo.</h2>
                <p>
                  Stay tuned for our release date to download the full Heirloom
                  App!
                </p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
