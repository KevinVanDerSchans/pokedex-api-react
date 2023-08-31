import { Outlet } from "react-router-dom"
import styled from "styled-components"

import Header from "../components/Header/Header"
// import SearchBar from ""


const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* <SearchBar /> */ }
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
