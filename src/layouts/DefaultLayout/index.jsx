import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import * as C from "./styles";
import "react-toastify/dist/ReactToastify.css";

export function DefaultLayout() {
  return (
    <C.LayoutContainer>
      <SideBar />
      <div className="header-mobile">
        <Header />
      </div>
      <Outlet />
    </C.LayoutContainer>
  );
}
