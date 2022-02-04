import styled from "@emotion/styled";
import { useState, useRef } from "react";
const TagContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: 300px;
  max-width: 500px;
  border: 1px solid gray;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  padding: 10px;
`;
const TagElementContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  line-height: 15px;
  position: relative;
  top: 90%;
  width: 25px;
  height: 25px;
`;

const TagInput = styled.input`
  border: 0px;
  outline: none;
  vertical-align: middle;
`;

const Tag = ({ width = 500, height = 50 }) => {
  const [tagArr, setTagArr] = useState([]);
  const nameInput = useRef();
  const changeInputEvent = ({ key, target }) => {
    if (key === "Enter") {
      setTagArr([...tagArr, target.value]);
      target.value = "";
      nameInput.current.focus();
    }
  };
  const ContentDiv = styled.div``;
  const eraseTagElement = ({ target }) => {
    const { id } = target.parentNode;
    setTagArr(tagArr.filter((_, idx) => Number(id) !== idx));
  };
  return (
    <TagContainer width={width} height={height}>
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
      />
    </TagContainer>
  );
};

export default Tag;
