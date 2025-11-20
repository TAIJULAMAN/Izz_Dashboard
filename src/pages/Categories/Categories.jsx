import { useMemo, useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

function Categories() {
  const [activeTab, setActiveTab] = useState("service");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const [data, setData] = useState([
    {
      id: 1,
      sid: "01",
      name: "Air Condition",
      type: "service",
      icon: "/icons/aircon.png",
    },
    {
      id: 2,
      sid: "01",
      name: "Electric Work",
      type: "specialization",
      icon: "/icons/electric.png",
    },
    {
      id: 3,
      sid: "01",
      name: "Siding repair",
      type: "service",
      icon: "/icons/siding.png",
    },
    {
      id: 4,
      sid: "01",
      name: "Painting",
      type: "specialization",
      icon: "/icons/paint.png",
    },
    {
      id: 5,
      sid: "01",
      name: "Plumbing",
      type: "service",
      icon: "/icons/plumbing.png",
    },
    {
      id: 6,
      sid: "01",
      name: "Flooring",
      type: "specialization",
      icon: "/icons/floor.png",
    },
    {
      id: 7,
      sid: "01",
      name: "Roofing",
      type: "service",
      icon: "/icons/roof.png",
    },
    {
      id: 8,
      sid: "01",
      name: "Cleaning",
      type: "specialization",
      icon: "/icons/clean.png",
    },
    {
      id: 9,
      sid: "01",
      name: "Moving",
      type: "service",
      icon: "/icons/move.png",
    },
  ]);

  const total = data.length;
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  const pages = Math.ceil(total / pageSize) || 1;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-[#111827] px-4 md:px-5 py-3 rounded-md flex items-center justify-between">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Categories</h1>
        <button className="flex items-center gap-2 bg-white text-[#111827] font-semibold px-4 py-2 rounded-md border border-[#111827]">
          <FiPlus />
          <span>+Add Categories</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTab("service")}
          className={`px-4 py-2 rounded-md border ${
            activeTab === "service"
              ? "bg-[#111827] text-white border-[#0EA5E9]"
              : "bg-white text-[#111827] border-[#111827]"
          }`}
        >
          Service Type
        </button>
        <button
          onClick={() => setActiveTab("spec")}
          className={`px-4 py-2 rounded-md border ${
            activeTab === "spec"
              ? "bg-[#111827] text-white border-[#0EA5E9]"
              : "bg-white text-[#111827] border-[#111827]"
          }`}
        >
          Specializations
        </button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left">
                <th className="border-y px-3 py-2">S.ID</th>
                <th className="border-y px-3 py-2">Category Name</th>
                <th className="border-y px-3 py-2">Category Image/Icon</th>
                <th className="border-y px-3 py-2">Category Type</th>
                <th className="border-y px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {paged.map((row) => (
                <tr key={row.id}>
                  <td className="border-b px-3 py-3">{row.sid}</td>
                  <td className="border-b px-3 py-3">{row.name}</td>
                  <td className="border-b px-3 py-3">{row.type}</td>
                  <td className="border-b px-3 py-3">
                    {row.icon ? (
                      <img
                        src={row.icon}
                        alt={row.name}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border-b px-3 py-3">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-[#111827] hover:opacity-80"
                        aria-label="edit"
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        className="text-red-600 hover:opacity-80"
                        aria-label="delete"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between text-sm">
        <div>
          SHOWING {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, total)}{" "}
          OF {total}
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: pages }).map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-md border flex items-center justify-center ${
                  page === p
                    ? "bg-[#111827] text-white"
                    : "bg-white text-[#111827]"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
