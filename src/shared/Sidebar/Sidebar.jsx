/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { TbBrandWechat, TbReport } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdLocalHospital,
  MdOutlineAssignment,
  MdOutlineInventory2,
} from "react-icons/md";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <div
      className={`bg-[#fff] text-[#0D0D0D] border border-[#E5E7EB] h-screen overflow-y-auto py-5 md:py-0 z-50 transition-transform shadow-lg my-5 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)]
        w-[80%] sm:w-[70%] md:w-[60%] lg:w-60 xl:w-72
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        fixed top-0 left-0
        lg:static lg:translate-x-0
      `}
    >
      {/* Close Button (Mobile Only) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 lg:hidden text-white bg-[#0D0D0D] focus:outline-none p-2 rounded-full"
      >
        <IoCloseSharp />
      </button>

      {/* Logo */}
      <div className="flex justify-center items-center gap-2 px-5 mt-20">
        <img src="/logo.png" className="w-[100px] h-[40px]" alt="User Avatar" />
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-10 px-5 text-[10px]">
        {/* Dashboard Page */}
        <Link to="/">
          <li
            className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <RxDashboard className="w-5 h-5" />
            <p className="text-lg font-semibold">Dashboard</p>
          </li>
        </Link>
        {/* User Management */}
        <Link to="/user-details">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/user-details")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <LuUsers className="w-5 h-5" />
            <p className="text-lg font-semibold">User Management</p>
          </li>
        </Link>
        {/* Earnings */}
        <Link to="/earnings">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/earnings")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <MdOutlineInventory2 className="w-5 h-5" />
            <p className="text-lg font-semibold">Earnings</p>
          </li>
        </Link>

        {/* Gamification*/}
        <Link to="/gamification">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/gamification")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <MdOutlineAssignment className="w-5 h-5" />
            <p className="text-lg font-semibold">Gamification</p>
          </li>
        </Link>
        {/* Categories */}
        <Link to="/categories">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/categories")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <MdLocalHospital className="w-5 h-5" />
            <p className="text-lg font-semibold">Categories</p>
          </li>
        </Link>
        {/* Lab Management */}
        {/* <Link to="/lab-management">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/lab-management")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <RiFlaskLine className="w-5 h-5" />
            <p className="text-lg font-semibold">Lab Management</p>
          </li>
        </Link> */}

        <Link to="/create-admin">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/create-admin")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <MdAdminPanelSettings className="w-5 h-5" />
            <p className="text-lg font-semibold">Create Admin</p>
          </li>
        </Link>

        {/* Chat */}
        <Link to="/chat">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/chat")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <TbBrandWechat className="w-5 h-5" />
            <p className="text-lg font-semibold">Chat</p>
          </li>
        </Link>
        <Link to="/reports">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/reports")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <TbReport className="w-5 h-5 text-lg font-semibold" />
            <p className="text-lg font-semibold">Reports</p>
          </li>
        </Link>
        <Link to="/settings">
          <li
            className={`flex items-center gap-2 mt-5 cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/settings")
                ? "bg-[#111827] text-white px-3 py-3 rounded-lg"
                : ""
            }`}
          >
            <IoMdSettings className="w-5 h-5 text-lg font-semibold" />
            <p className="text-lg font-semibold">Settings</p>
          </li>
        </Link>
      </ul>

      {/* Logout Button */}
      <div className="absolute mt-8 md:mt-20 mmd:mt-20 w-full px-5">
        <Link to="/sign-in">
          <button className="flex items-center gap-4 w-full py-3 rounded-lg bg-[#111827]  px-3 duration-200 text-white justify-center ">
            <IoLogOutOutline className="w-5 h-5 font-bold" />
            <span>Logout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
