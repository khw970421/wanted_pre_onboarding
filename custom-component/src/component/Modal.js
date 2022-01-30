import styled from "@emotion/styled";
import React, { useState } from "react";

const Modal = ({
  width = 20,
  height = 10,
  btnText = "Open Modal",
  modalContent = "Hello CodeStates",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ModalEvent = () => {
    setIsModalOpen(!isModalOpen);
  };

  const checkModalOut = ({ target }) => {
    if (target.className.includes("modalContainer")) ModalEvent();
  };

  return (
    <div>
      {isModalOpen ? (
        <ModalContainer onClick={checkModalOut} className="modalContainer">
          <ModalDiv>
            <ModalOutDiv onClick={ModalEvent}>x</ModalOutDiv>
            <ContentDiv> {modalContent}</ContentDiv>
          </ModalDiv>
        </ModalContainer>
      ) : (
        <></>
      )}
      <ModalBtn width={width} height={height} onClick={ModalEvent}>
        {btnText}
      </ModalBtn>
    </div>
  );
};

const ModalBtn = styled.button`
  background: purple;
  width: ${({ width }) => width}vh;
  height: ${({ height }) => height}vh;
  border-radius: ${({ height }) => height}vh;
  color: white;
  border: 0px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 20vw;
  height: 15vh;
  border-radius: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: purple;
  padding: 1%;
`;

const ContentDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  margin-top: 1px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const ModalOutDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10px;
  left: 50%;
  color: black;
  cursor: pointer;
`;

export default Modal;
