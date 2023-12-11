import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b from-main-dark to-sub-dark">
      <Navbar />
      <div className="flex flex-col max-w-screen-xl mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}
