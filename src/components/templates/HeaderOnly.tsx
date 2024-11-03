import { Outlet } from "react-router-dom";
import Header from "../atoms/layout/Header";

export default function HeaderOnly() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
