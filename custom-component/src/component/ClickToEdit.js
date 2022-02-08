import styled from "@emotion/styled";
import { useState } from "react";

const ClickToEdit = ({width=90,height=30}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const checkAge = (val) => Number.isInteger(Number(val)) && Number(val) > 0;

  const blurEvent = ({ target }) => {
    if (target.className.includes("nameInput")) {
      setName(target.value);
      return;
    }
    if (target.className.includes("ageInput") && checkAge(target.value))
      setAge(target.value);
    else {
      target.value = "";
      alert("자연수인 숫자를 입력해주세요");
    }
  };
  return (
    <EditContainer width={width} height={height}>
      <NameContainer>
        이름 : <NameInput onBlur={blurEvent} className="nameInput" />
      </NameContainer>
      <AgeContainer>
        나이 : <AgeInput onBlur={blurEvent} className="ageInput" />
      </AgeContainer>
      <ResultInformation>
        이름 {name} 나이 {age}
      </ResultInformation>
    </EditContainer>
  );
};
const EditContainer = styled.div`
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const NameContainer = styled.div`
  padding: 1vh 1vw;
`;
const AgeContainer = styled.div`
  padding: 1vh 1vw;
`;

const NameInput = styled.input`
  :focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;
const AgeInput = styled.input`
  :focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;

const ResultInformation = styled.div``;

export default ClickToEdit;
