import BreadcrumbNav from "./breadcrumb";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-fit bg-light-theme text-custom-gray dark:bg-gradient-to-b from-main-dark to-sub-dark dark:text-white ">
      <Navbar />
      <div className="flex flex-col max-w-screen-xl mx-auto px-2 lg:px-0">
        <BreadcrumbNav />
        <Outlet />
      </div>
    </div>
  );
}
