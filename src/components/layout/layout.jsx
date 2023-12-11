import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gradient-to-b from-main-dark to-sub-dark">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
