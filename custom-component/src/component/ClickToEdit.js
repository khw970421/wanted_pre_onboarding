import styled from "@emotion/styled";
import { useState } from "react";

const ClickToEdit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const blurEvent = ({ target }) => {
    if (target.className.includes("nameInput")) setName(target.value);
    if (target.className.includes("ageInput")) setAge(target.value);
  };
  return (
    <EditContainer>
      <NameContainer>
        이름 : <NameInput onBlur={blurEvent} className="nameInput" />
      </NameContainer>
      <AgeContainer>
        나이 : <AgeInput onBlur={blurEvent} className="ageInput" />
      </AgeContainer>
      <ResultInformation>
        이름 {name} age {age}
      </ResultInformation>
    </EditContainer>
  );
};
const EditContainer = styled.div``;
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
