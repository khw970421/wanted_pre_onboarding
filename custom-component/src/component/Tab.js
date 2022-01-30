import styled from "@emotion/styled";
import { useState } from "react";
const exampleTabArr = ["Tab1", "Tab2", "Tab3", "Tab4"];

const Tab = ({ width = 40, height = 10, tabArr = exampleTabArr }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const clickMenuTab = ({ target }) => {
    setSelectedTab(Number(target.id));
  };
  return (
    <MenuContainer>
      <MenuTable>
        {tabArr &&
          tabArr.map((tab, id) => (
            <MenuItem
              onClick={clickMenuTab}
              id={id}
              width={width}
              height={height}
              tabArr={tabArr}
              selectedId={selectedTab}
            >
              {tab}
            </MenuItem>
          ))}
      </MenuTable>
      <MenuResult width={width} height={height}>
        Tab menu {tabArr[selectedTab]}
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
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vh;
`;

export default Tab;
