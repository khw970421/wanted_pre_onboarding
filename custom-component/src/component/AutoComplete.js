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
  const [searchIncludeArr, setSearchIncludeArr] = useState("");
  const [isSearchValueOpen, setIsSearchValueOpen] = useState(false);

  const retSearchIncludeArr = (value) =>
    exampleArr.filter((saveValue) => saveValue.indexOf(value) >= 0);

  const changeInput = ({ target }) => {
    if (target.value !== "") {
      setSearchIncludeArr(retSearchIncludeArr(target.value));
      setIsSearchValueOpen(true);
    } else {
      setIsSearchValueOpen(false);
    }
  };
  return (
    <InputContainer>
      <Input type="search" onChange={changeInput} />
      {isSearchValueOpen && searchIncludeArr.map((val) => <div>{val}</div>)}
    </InputContainer>
  );
};

export default AutoComplete;
