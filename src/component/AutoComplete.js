import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AutoCompleteContainer = styled.div`
  height: 300px;
  border-bottom: solid 1px black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 100px;
  align-items: center;
  .autocomplete-content {
    > .input-box {
      width: 300px;
      height: 32px;
      border: solid 1px lightgrey;
      border-radius: 8px;
      outline: none;
      box-sizing: border-box;
      display: flex;
      padding: 0 8px;
      justify-content: space-between;
      align-items: center;
      &:focus-within {
        box-shadow: 0px 3px 3px rgba(27, 39, 63, 0.3);
      }
      &.shadow-off {
        box-shadow: none;
        border-radius: 8px 8px 0px 0px;
      }
      > input {
        flex: 1;
        height: 100%;
        outline: none;
        border: none;
        box-sizing: border-box;
      }
      > .clear-btn {
        cursor: pointer;
      }
    }

    > ul {
      display: none;
      &.active {
        box-sizing: border-box;
        width: 300px;
        display: flex;
        list-style: none;
        flex-direction: column;
        text-align: start;
        border: solid 1px lightgrey;
        margin: 0;
        padding: 0px;
        box-shadow: 0px 3px 3px rgba(27, 39, 63, 0.3);
        border-radius: 0px 0px 8px 8px;
        border-top: none;
      }
      > li {
        padding: 0 8px;
        margin: 4px 0;
        line-height: 14px;
        &:hover {
          background-color: rgba(180, 180, 180, 0.3);
        }
      }
    }
  }
`;

const data = ["antique", "vintage", "rustic", "refurbished", "중고A급"];

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const el = useRef();

  //close 버튼 클릭시 input과 결과 클리어
  const clearInput = () => {
    setSearch("");
    setResult(() => []);
  };

  //컨텐츠 영역 밖 클릭시 result 리스트 닫기
  const handleClose = (event) => {
    if (!el.current || !el.current.contains(event.target)) {
      setResult(() => []);
    }
  };

  //list 클릭시 list의 item을 input value 값으로 복사
  const onResultClick = (event) => {
    setSearch(event.target.textContent);
  };

  const onTextChange = (event) => {
    const value = event.target.value;
    let array = [];
    setSearch(value);
    //입력된 값이 있으면 data 필터링
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "gi");
      array = data.filter((v) => v.match(regex));
    }
    setResult(() => array);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <AutoCompleteContainer>
      <div className="autocomplete-content" ref={el}>
        <div className={`input-box ${result.length > 0 && "shadow-off"}`}>
          <input onChange={onTextChange} value={search} />
          <span onClick={clearInput} className="clear-btn">
            &times;
          </span>
        </div>

        <ul className={`${result.length > 0 && "active"}`}>
          {result.map((item, i) => (
            <li key={i} onClick={onResultClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AutoCompleteContainer>
  );
};

export default AutoComplete;
