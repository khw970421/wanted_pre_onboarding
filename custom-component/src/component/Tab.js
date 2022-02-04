import styled from "@emotion/styled";
import { useState } from "react";
const exampleTabArr = [
  {
    tagName: "Tab1",
    text: "ONE",
  },
  {
    tagName: "Tab2",
    text: "TWO",
  },
  {
    tagName: "Tab1",
    text: "THREE",
  },
  {
    tagName: "Tab1",
    text: "FOUR",
  },
];

const Tab = ({ width = 40, height = 5, tabArr = exampleTabArr }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const clickMenuTab = ({ target }) => {
    setSelectedTab(Number(target.id));
  };
  return (
    <MenuContainer>
      <MenuTable>
        {tabArr &&
          tabArr.map(({ tagName }, id) => (
            <MenuItem
              onClick={clickMenuTab}
              id={id}
              width={width}
              height={height}
              tabArr={tabArr}
              selectedId={selectedTab}
            >
              {tagName}
            </MenuItem>
          ))}
      </MenuTable>
      <MenuResult width={width} height={height}>
        Tab menu {tabArr[selectedTab].text}
      </MenuResult>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MenuTable = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  width: calc(${({ width }) => width}vw / ${({ tabArr }) => tabArr.length});
  height: ${({ height }) => height}vh;
  background-color: ${({ selectedId, id }) =>
    selectedId === id ? "purple" : "rgba(0,0,0,0.1)"};
  color: ${({ selectedId, id }) =>
    selectedId === id ? "white" : "rgba(0,0,0,0.6)"};
  display: flex;
  align-items: center;
  padding: 1%;
  cursor: pointer;
`;

const MenuResult = styled.div`
  text-align: center;
  line-height: ${({ height }) => height}vh;
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vh;
`;

export default Tab;
