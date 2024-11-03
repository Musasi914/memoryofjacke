import { Outlet, useLocation } from "react-router-dom";
import Header from "../atoms/layout/Header";
import Footer from "../atoms/layout/Footer";
import Top from "../pages/Top";

export default function DefaultLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname === "/" ? <Top /> : <Outlet />}
      <Footer />
    </>
  );
}
