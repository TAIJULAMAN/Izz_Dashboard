import { FaChevronDown, FaUsers, FaVideo } from "react-icons/fa";
import { useState } from "react";
import dayjs from "dayjs";
import RecentUsers from "./RecentUsers";
import TotalView from "./TotalView";

function DashboardPage() {
  const currentYear = dayjs().year();
  const startYear = 2020;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isOpen, setIsOpen] = useState(false);

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 whitespace-nowrap h-[100px] rounded-xl">
        <div className="relative flex flex-col justify-center items-center p-3 bg-[#F2F2F2] gap-1">
          <p className="text-[#111827] text-2xl font-bold mr-10">200K</p>
          <p className="text-xl font-semibold">Total User</p>
          {/* Desktop/tablet right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#111827]" />
        </div>
        <div className="relative flex flex-col justify-center items-center p-3 bg-[#F2F2F2] gap-1">
          <p className="text-[#111827] text-2xl font-bold mr-10">1200</p>
          <p className="text-xl font-semibold">Venue Listed</p>
          {/* Desktop/tablet right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#111827]" />
        </div>
        <div className="relative flex flex-col justify-center items-center p-3 bg-[#F2F2F2] gap-1">
          <p className="text-[#111827] text-2xl font-bold mr-10">1200</p>
          <p className="text-xl font-semibold">Venue Booked</p>
          {/* Desktop/tablet right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#111827]" />
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-[#F2F2F2] gap-1">
          <p className="text-[#111827] text-2xl font-bold mr-10">$120K</p>
          <p className="text-xl font-semibold">Total Revenue</p>
        </div>
      </div>

      <div className="w-full p-5 bg-[#F2F2F2] rounded-lg shadow-md mt-5">
        <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
          <div>
            <h1 className="text-xl text-[#111827] font-semibold">User Growth</h1>
          </div>
          <div className="flex justify-between items-center gap-5 whitespace-nowrap">
            <div className="relative w-full md:w-32">
              {/* Selected Year Display */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-[#111827] rounded-md flex justify-between items-center bg-white transition"
              >
                <span className="text-[#111827]">{selectedYear}</span>
                <FaChevronDown className="text-[#111827] w-5 h-5 ml-5" />
              </button>

              {/* Dropdown List */}
              {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg text-lg">
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => handleSelect(year)}
                      className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                        year === selectedYear ? "bg-[#111827] text-white" : ""
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <TotalView />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-[#111827] font-bold mb-5">Recent Joined User</h1>
        <RecentUsers />
      </div>
    </div>
  );
}

export default DashboardPage;
