import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-light-theme text-custom-gray dark:bg-gradient-to-b from-main-dark to-sub-dark text-white">
      <Navbar />
      <div className="flex flex-col max-w-screen-xl mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}
