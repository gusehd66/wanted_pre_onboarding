import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  border-bottom: solid 1px black;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  > button {
    background-color: #4900ce;
    border: none;
    border-radius: 25px;
    width: 120px;
    height: 50px;
    color: white;
  }
`;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: lightgrey;
  justify-content: center;
  align-items: center;
  color: #4900ce;
  > .modal-content {
    width: 300px;
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    position: relative;
    > button {
      position: absolute;
      top: 8px;
      background-color: white;
      border: none;
      font-size: 24px;
    }
  }
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  //렌더링 시킬 DOM을 직접 선택하여 Portal 생성
  const Portal = (props) => {
    return createPortal(props.children, document.getElementById("modal"));
  };

  //modal 렌더
  const ModalDesc = () => {
    return (
      <ModalBox>
        <div className="modal-content">
          <button onClick={() => setIsOpen(false)}>&times;</button>
          <p>HELLO CODESTATES!</p>
        </div>
      </ModalBox>
    );
  };

  return (
    <ModalContainer>
      <Portal>{isOpen && <ModalDesc />}</Portal>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </ModalContainer>
  );
};

export default Modal;
