/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoMenu, IoNotificationsOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";

const MainHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full px-5">
      <header className="bg-[#EDF1ED] shadow-sm rounded-lg border border-[#E5E7EB] overflow-hidden">
        <div className="flex justify-between items-center px-5 md:px-10 h-[80px]">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            className="p-2 rounded hover:opacity-80 focus:outline-none"
          >
            <IoMenu className="w-8 h-8 text-[#0D0D0D]" />
          </button>
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => navigate('/notifications')}
              className="relative p-2 rounded-full border border-[#74AA2E] hover:bg-white/60 transition"
            >
              <IoNotificationsOutline className="w-6 h-6 text-[#0D0D0D]" />
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#74AA2E] text-white text-[10px] px-1 leading-none">3</span>
            </button>
            {/* Chat */}
            <button
              type="button"
              aria-label="Open chat"
              onClick={() => navigate('/chat')}
              className="p-2 rounded-full border border-[#74AA2E] hover:bg-white/60 transition"
            >
              <IoChatbubbleEllipsesOutline className="w-6 h-6 text-[#0D0D0D]" />
            </button>
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 cursor-default"
            >
              <img
                src="https://avatar.iran.liara.run/public/31"
                className="w-8 md:w-12 h-8 md:h-12 object-cover rounded-full"
                alt="User Avatar"
              />
              <div>
                <h3 className="hidden md:block text-[#0D0D0D] text-lg font-semibold">
                  Mr. Admin
                </h3>
                <p className="text-[#0D0D0D] text-lg font-semibold">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
