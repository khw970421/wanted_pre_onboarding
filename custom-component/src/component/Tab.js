import styled from "@emotion/styled";
import { useState } from "react";
const exampleTabArr = ["Tab1", "Tab2", "Tab3", "Tab4"];

const MenuContainer = styled.div``;

const MenuTable = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  width: calc(100vw / ${({ tabArr }) => tabArr.length});
  background-color: ${({ selectedId, id }) =>
    selectedId === id ? "purple" : "rgba(0,0,0,0.1)"};
    color : ${({ selectedId, id }) =>
    selectedId === id ? "white" : "rgba(0,0,0,0.6)"};
`;

const MenuResult = styled.div``;

const Tab = ({ width = 40, height = 30, tabArr = exampleTabArr }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const clickMenuTab = ({ target }) => {
    setSelectedTab(Number(target.id));
  };
  return (
    <MenuContainer width={width} height={height}>
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
      <MenuResult>Tab menu {tabArr[selectedTab]}</MenuResult>
    </MenuContainer>
  );
};

export default Tab;
