import styled from "@emotion/styled";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

function App() {
  return (
    <div>
      <ComponentContainer text="Toggle" />
      <ComponentContainer text="Modal" />
      <ComponentContainer text="Tab" />
      <ComponentContainer text="Tag" />
      <ComponentContainer text="AutoComplete" />
      <ComponentContainer text="ClickToEdit" />
    </div>
  );
}

const ComponentContainerStyle = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const ComponentContainer = ({ text }) => {
  if (text === "Toggle")
    return (
      <ComponentContainerStyle>
        {text}
        <Toggle></Toggle>
      </ComponentContainerStyle>
    );
  else if (text === "Modal")
    return (
      <ComponentContainerStyle>
        {text}
        <Modal></Modal>
      </ComponentContainerStyle>
    );
  else if (text === "Tab")
    return (
      <ComponentContainerStyle>
        {text}
        <Tab></Tab>
      </ComponentContainerStyle>
    );
  else if (text === "Toggle")
    return (
      <ComponentContainerStyle>
        {text}
        <Toggle></Toggle>
      </ComponentContainerStyle>
    );
  else if (text === "Tag")
    return (
      <ComponentContainerStyle>
        {text}
        <Tag></Tag>
      </ComponentContainerStyle>
    );
  else if (text === "AutoComplete")
    return (
      <ComponentContainerStyle>
        {text}
        <AutoComplete></AutoComplete>
      </ComponentContainerStyle>
    );
  else
    return (
      <ComponentContainerStyle>
        {text}
        <ClickToEdit></ClickToEdit>
      </ComponentContainerStyle>
    );
};

export default App;
