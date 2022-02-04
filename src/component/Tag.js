import { useState } from "react";
import styled from "styled-components";

export const TagContainer = styled.div`
  border-bottom: solid 1px black;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  > .tag-box {
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    min-height: 48px;
    width: 600px;
    padding: 8px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;

    #tag-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      align-items: center;

      > .tags {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        border-radius: 8px;
        box-sizing: border-box;
        margin: 4px 8px;
        background: #4900ce;

        > .tag-close {
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          margin-left: 8px;
          color: #4900ce;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
        }
      }
    }

    > input {
      flex: 1;
      border: none;
      height: 40px;
      padding: 4px;
      outline: lightgray;
    }
    &:focus-within {
      border: 1px solid #4900ce;
    }
  }
`;

export const Tag = () => {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  // index를 전달 받아 태그 삭제
  const removeTags = (removeItem) => {
    setTags(
      tags.filter((_, i) => {
        return i !== removeItem;
      })
    );
  };

  //태그 추가
  const addTags = (event) => {
    let value = event.target.value.trim();
    // 입력된 키가 Enter 이고, value값이 있으면 추가
    if (event.key === "Enter" && value) {
      setTags([...tags, value]);
      setValue("");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TagContainer>
      <div className="tag-box">
        <ul id="tag-list">
          {tags.map((tag, index) => (
            <li key={index} className="tags">
              <span className="tag-title">{tag}</span>
              <span className="tag-close" onClick={() => removeTags(index)}>
                &times;
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(event) => {
            addTags(event);
          }}
          onChange={handleChange}
          value={value}
          placeholder="Press enter to add tags"
        />
      </div>
    </TagContainer>
  );
};
export default Tag;
