import { useState } from "react";
import Sidebar from "../shared/Sidebar/Sidebar";
import MainHeader from "../shared/MainHeader/MainHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40 lg:hidden"
        />
      )}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col w-full overflow-hidden my-5">
        <MainHeader toggleSidebar={toggleSidebar} />
        <main className="p-5 bg-white flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
