import { Outlet } from "react-router-dom";
import Links from "./components/Links";

export default function Home() {
  return (
    <>
      <Links />
      <Outlet />
    </>
  );
}
