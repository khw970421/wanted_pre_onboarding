import styled from "@emotion/styled";
import { useState } from "react";

const Toggle = ({ width = 50, height = 30, disabled }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        height={height}
      />
      <ToggleSwitch width={width} height={height} />
      Toggle Switch {checked ? "On" : "Off"}
    </ToggleContainer>
  );
};
const ToggleContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 4px;
  box-sizing: border-box;
  background-color: #ccc;
  border-radius: ${(props) => props.height}px;

  &:after {
    content: "";
    position: relative;
    left: 0;
    display: block;
    width: ${(props) => props.height - 8}px;
    height: ${(props) => props.height - 8}px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.5s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: purple;
  }

  &:checked + div:after {
    left: calc(100% - ${(props) => props.height - 8}px);
  }
`;
export default Toggle;
