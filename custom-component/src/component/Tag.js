import styled from "@emotion/styled";
import { useState, useRef } from "react";

const Tag = ({ width = 500, height = 30 }) => {
  const [tagArr, setTagArr] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const nameInput = useRef();
  const changeInputEvent = ({ key, target }) => {
    if (key === "Enter" && target.value !== "") {
      setTagArr([...tagArr, target.value]);
      target.value = "";
      nameInput.current.focus();
    }
  };

  const eraseTagElement = ({ target }) => {
    const { id } = target.parentNode;
    setTagArr(tagArr.filter((_, idx) => Number(id) !== idx));
  };

  const focusInput = () => {
    setInputFocus(!inputFocus);
  };
  return (
    <TagContainer>
      <TagSubContainer width={width} height={height} inputFocus={inputFocus}>
        {tagArr.map((val, idx) => (
          <TagElementContainer id={idx} key={idx}>
            <ContentDiv> {val}</ContentDiv>
            <TagEraseBtn onClick={eraseTagElement}>X</TagEraseBtn>
          </TagElementContainer>
        ))}

        <TagInput
          placeholder="Press enter to add tags"
          onKeyUp={changeInputEvent}
          ref={nameInput}
          onFocus={focusInput}
          onBlur={focusInput}
        />
      </TagSubContainer>
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TagSubContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: 300px;
  max-width: 500px;
  border: ${({ inputFocus }) =>
    inputFocus ? "1.5px solid black" : "1px solid gray"};
  padding: 10px;
  overflow: hidden;
`;
const TagElementContainer = styled.div`
  display: flex;
  background-color: purple;
  color: white;
  border-radius: 1%;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
`;

const TagEraseBtn = styled.button`
  border-radius: 50%;
  background-color: white;
  border: 0px;
  margin-left: 5px;
  padding: 6px;
  text-align: center;
  width: 25px;
  height: 25px;
`;

const TagInput = styled.input`
  border: 0px;
  outline: none;
`;
const ContentDiv = styled.div`
  white-space: nowrap;
`;

export default Tag;


/*
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
const Tag = ({ width = 500, height = 30 }) => {
  const [tagArr, setTagArr] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const nameInput = useRef();
  const changeInputEvent = ({ key, target }) => {
    if (key === 'Enter' && target.value !== '') {
      setTagArr([...tagArr, target.value]);
      target.value = '';
      nameInput.current.focus();
    }
  };

  const eraseTagElement = ({ target }) => {
    const { id } = target.parentNode;
    setTagArr(tagArr.filter((_, idx) => Number(id) !== idx));
  };

  const focusInput = () => {
    setInputFocus(!inputFocus);
  };
  return (
    <TagContainer width={width} height={height}>
      <TagSubContainer inputFocus={inputFocus}>
        {tagArr.map((val, idx) => (
          <TagElementContainer id={idx} key={idx}>
            <ContentDiv> {val}</ContentDiv>
            <TagEraseBtn onClick={eraseTagElement}>X</TagEraseBtn>
          </TagElementContainer>
        ))}
      </TagSubContainer>
      <TagInput
        placeholder="Press enter to add tags"
        onKeyUp={changeInputEvent}
        ref={nameInput}
        onFocus={focusInput}
        onBlur={focusInput}
      />
    </TagContainer>
  );
};

const TagContainer = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
`;

const TagSubContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
`;
const TagElementContainer = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #4000c7;
`;

const TagEraseBtn = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #4000c7;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;

const TagInput = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  :focus {
    outline: transparent;
  }
`;
const ContentDiv = styled.div`
  white-space: nowrap;
`;

Tag.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
export default Tag;
*/

// 이와같이 수정하면 좀더 추가될 경우 세로로 커지게 진행된다. 
// flex: 1;을통해 input이 차지할 범위를 width 전체로 넓게 지정했다.
