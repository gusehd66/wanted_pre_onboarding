import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  > .toggle-btn {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-position: right;
    background: linear-gradient(to left, grey 50%, #4900ce 50%) right;
    background-size: 200%;
    transition: 1s;
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #fff;
      transition: 1s;
    }
    &.toggle-checked {
      background-position: left;
      background: linear-gradient(to right, #4900ce 50%, grey 50%) left;
      background-size: 200%;
      &::before {
        transform: translateY(-50%) translateX(-110%);
        left: 90%;
      }
    }
  }

  .desc {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

const Toggle = () => {
  const [power, setPower] = useState(false);

  const handleToggle = () => {
    setPower(() => !power);
  };

  return (
    <ToggleContainer>
      <div
        className={`toggle-btn ${power ? "toggle-checked" : ""}`}
        onClick={handleToggle}
      />

      <div className="desc">
        <p>Toggle Switch {power ? "ON" : "OFF"}</p>
      </div>
    </ToggleContainer>
  );
};

export default Toggle;
