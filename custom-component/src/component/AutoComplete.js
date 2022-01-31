import styled from "@emotion/styled";
import { useState } from "react";

const exampleArr = [
  "apple",
  "banana",
  "watermelon",
  "lemon",
  "cherry",
  "pineapple",
  "blueberry",
];

const InputContainer = styled.div``;

const EraseBtn = styled.button``;
const Input = styled.input``;

const AutoComplete = () => {
  const [searchIncludeArr, setSearchIncludeArr] = useState([]);
  const [isSearchValueOpen, setIsSearchValueOpen] = useState(false);

  const retSearchIncludeArr = (value) =>
    exampleArr.filter((saveValue) => saveValue.indexOf(value) >= 0);

  const changeInput = ({ target }) => {
    const value = target.value;
    if (value !== "") {
      const retArr = retSearchIncludeArr(value);
      setSearchIncludeArr(retArr);
      setIsSearchValueOpen(true);
    } else {
      setIsSearchValueOpen(false);
    }
  };

  const clickSearchValue = ({ target }) => {
    const $Input = document.querySelector(".inputSearch");
    $Input.value = target.innerText;
    setSearchIncludeArr([]);
  };
  return (
    <InputContainer>
      <Input
        type="search"
        onChange={changeInput}
        autocomplete="off"
        className="inputSearch"
      />
      <ul className="item-ul">
        {isSearchValueOpen &&
          searchIncludeArr.map((val, idx) => (
            <li onClick={clickSearchValue} id={idx}>
              {val}
            </li>
          ))}
      </ul>
    </InputContainer>
  );
};

export default AutoComplete;
