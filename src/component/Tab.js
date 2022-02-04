import { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  border-bottom: solid 1px black;
  box-sizing: border-box;
  height: 300px;
  ul {
    background-color: lightgray;
    color: grey;
    font-weight: bold;
    display: flex;
    list-style: none;
    height: 40px;
    > li {
      cursor: pointer;
      display: flex;
      padding: 8px;
      box-sizing: border-box;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: 0.2s;
      &.active {
        background-color: #4900ce;
        color: white;
        height: 100%;
      }
    }
  }

  .desc {
    height: 240px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const menuArray = [
  { name: "Tab1", content: "Tab menu ONE" },
  { name: "Tab2", content: "Tab menu TWO" },
  { name: "Tab3", content: "Tab menu THREE" },
];

const Tab = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const onMenuClick = (index) => {
    setTabNumber(index);
  };

  return (
    <TabContainer>
      <ul>
        {menuArray.map((menu, index) => {
          return (
            <li
              key={index}
              className={`${index === tabNumber ? "active" : ""}`}
              onClick={() => onMenuClick(index)}
            >
              {menu.name}
            </li>
          );
        })}
      </ul>

      <div className="desc">
        <p>{menuArray[tabNumber].content}</p>
      </div>
    </TabContainer>
  );
};

export default Tab;
