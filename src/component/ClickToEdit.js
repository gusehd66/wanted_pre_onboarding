import { useState } from "react";
import styled from "styled-components";

const ClickToEditContainer = styled.div`
  border-bottom: solid 1px black;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  input {
    line-height: 24px;
    margin: 24px 8px 16px;
    text-align: center;
    &:focus-within {
      border: solid 1px #6589ae;
      outline: solid 1px #48728d;
    }
  }
`;

const ClickToEdit = () => {
  const [info, setInfo] = useState({ name: "", age: "" });

  //하나의 이벤트로 start를 동적으로 변경
  const handleBlur = (event) => {
    const { id, value } = event.target;
    setInfo({ ...info, [id]: value });
  };

  return (
    <ClickToEditContainer>
      <label htmlFor="name">
        이름
        <input id="name" onBlur={(event) => handleBlur(event)} />
      </label>
      <label htmlFor="age">
        나이
        <input id="age" onBlur={(event) => handleBlur(event)} />
      </label>
      {`이름 ${info.name}  나이 ${info.age}`}
    </ClickToEditContainer>
  );
};

export default ClickToEdit;
