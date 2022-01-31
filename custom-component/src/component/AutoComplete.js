import styled from "@emotion/styled";
import { useState } from "react";

//TODO : 정확히는 AUTOCOMPLETE 부분이 아래 컨텐츠가 있어도 위에 떠있게 구현해야한다.

const exampleArr = [
  "apple",
  "banana",
  "watermelon",
  "lemon",
  "cherry",
  "pineapple",
  "blueberry",
];

const AutoComplete = ({
  width = 30,
  height = 10,
  autocompleteData = exampleArr,
}) => {
  const [searchIncludeArr, setSearchIncludeArr] = useState([]);
  const [isSearchValueOpen, setIsSearchValueOpen] = useState(false);

  const retSearchIncludeArr = (value) =>
    autocompleteData.filter((saveValue) => saveValue.indexOf(value) >= 0);

  const changeInput = ({ target }) => {
    const value = target.value;
    if (value !== "") {
      const retArr = retSearchIncludeArr(value);
      setSearchIncludeArr(retArr);
      if (retArr.length !== 0) setIsSearchValueOpen(true);
      else setIsSearchValueOpen(false);
    } else {
      setIsSearchValueOpen(false);
    }
  };

  const clickSearchValue = ({ target }) => {
    const $Input = document.querySelector(".inputSearch");
    $Input.value = target.innerText;
    setSearchIncludeArr([]);
    setIsSearchValueOpen(false);
  };
  return (
    <InputContainer>
      <Input
        type="search"
        onChange={changeInput}
        autocomplete="off"
        className="inputSearch"
        width={width}
        height={height}
        searchOpen={isSearchValueOpen}
      />
      {isSearchValueOpen && (
        <SearchUl
          className="item-ul"
          width={width}
          height={height}
          length={searchIncludeArr.length}
        >
          {searchIncludeArr.map((val, idx) => (
            <SearchLi onClick={clickSearchValue} key={idx} height={height}>
              {val}
            </SearchLi>
          ))}
        </SearchUl>
      )}
    </InputContainer>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EraseBtn = styled.button``;
const Input = styled.input`
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vh;
  padding: 1vh 1vw;
  border-radius: 10px;
  border: 1px solid gray;
`;
const SearchUl = styled.ul`
  padding: 0px;
  margin: 0px;
  width: ${({ width }) => width}vw;
  height: calc(${({ length }) => length} * ${({ height }) => height}vh);
  border: 1px solid gray;
  box-shadow: 0px 5px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const SearchLi = styled.li`
  padding: 1vh 1vw;
  box-sizing: border-box;
  list-style: none;
  text-align: left;
  height: ${({ height }) => height}vh;
`;

export default AutoComplete;
