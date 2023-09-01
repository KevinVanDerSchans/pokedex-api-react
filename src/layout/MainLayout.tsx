import { Outlet } from "react-router-dom"
import styled from "styled-components"

//import Footer from "../components/Footer/Footer";

const Main = styled.main`
  margin: 0 auto;
`;

const MainLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>

      { /* <Footer /> */ }
    </>
  );
};

export default MainLayout;
