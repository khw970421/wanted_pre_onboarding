import styled from "@emotion/styled";
import { useState } from "react";
const Button = styled.button`
  margin: 0px;
  border: 0px;
  padding: 1% 6px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  background-color: ${(props) =>
    props.isClick ? "purple" : "rgb(220, 220, 220, 0.5)"};
  position: relative;
`;

const ButtonToggle = styled.div`
  background-color: white;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translate(0, -50%);
  left: ${(props) => (props.isClick ? "" : "8%")};
  right: ${(props) => (props.isClick ? "8%" : "")};
  width: ${(props) => props.height * 0.8}px;
  height: ${(props) => props.height * 0.8}px;
  border-radius: ${(props) => props.height * 0.8}px;
  transition: left 1s ease-out;
`;

const Toggle = ({ width = 300, height = 100 }) => {
  const [isClick, setIsClick] = useState(false);
  const clickToggle = () => {
    setIsClick(!isClick);
  };
  return (
    <Button
      width={width}
      height={height}
      onClick={clickToggle}
      isClick={isClick}
    >
      <ButtonToggle width={width} height={height} isClick={isClick} />
    </Button>
  );
};

export default Toggle;
